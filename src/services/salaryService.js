import db from "../models/index";

let saveBasicSalaryService = (inputData) => {
    console.log('check inputData: ', inputData);
    return new Promise(async (resolve, reject) => {
        try {
            if (!inputData.staffId || !inputData.basicSalary || !inputData.month) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing parameter"
                })
            } else {

                if (inputData.deductionSalary !== '0' && inputData.deductionSalary !== '') {
                    await db.Salary.create({
                        staffId: inputData.staffId,
                        basicSalaries: inputData.basicSalary,
                        deductionSalaries: inputData.basicSalary / 24 * inputData.deductionSalary,
                        month: inputData.month
                    })
                    await db.DeductionSalary.create({
                        staffId: inputData.staffId,
                        quantity: inputData.deductionSalary,
                        month: inputData.month
                    })
                }
                else {
                    await db.Salary.create({
                        staffId: inputData.staffId,
                        basicSalaries: inputData.basicSalary,
                        deductionSalaries: inputData.basicSalary / 24 * inputData.deductionSalary,
                        // date: new Date(),
                        month: inputData.month
                    })
                }


                resolve({
                    errCode: 0,
                    errMessage: "Save basic salary succeed!"
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getBasicSalaryByIdService = (inputId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!inputId) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing parameter!"
                })
            } else {
                let data = await db.User.findOne({
                    where: {
                        id: inputId
                    },
                    attributes: {
                        exclude: ['password', 'image']
                    },
                    include: [
                        {
                            model: db.Salary,
                            attributes: ['basicSalaries', 'date']
                        },
                        {
                            model: db.Allcode,
                            as: 'positionData',
                            attributes: ['valueEn', 'valueVi']
                        },

                    ],
                    raw: true,
                    nest: true
                })

                resolve({
                    errCode: 0,
                    data: data
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getAllBonusSalaryByMonth = (staffId, month) => {
    return new Promise(async (resolve, reject) => {
        try {

            let bonusSalaries = await db.BonusSalary.findAll({
                where: {
                    staffId: staffId,
                    month: month
                },
                raw: true,
                nest: true
            })

            resolve(bonusSalaries);

        } catch (e) {
            reject(e);
        }
    })
}

let getAllSalaryByMonth = (staffId, month) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!staffId || !month) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameters',
                })
            } else {
                let Salaries = await db.Salary.findAll({
                    where: {
                        staffId: staffId,
                        month: month
                    },
                    raw: true,
                    nest: true
                })

                if (!Salaries) Salaries = [];
                resolve({
                    errCode: 0,
                    data: Salaries
                });
            }


        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    saveBasicSalaryService: saveBasicSalaryService,
    getBasicSalaryByIdService: getBasicSalaryByIdService,
    getAllBonusSalaryByMonth: getAllBonusSalaryByMonth,

    getAllSalaryByMonth: getAllSalaryByMonth,
}