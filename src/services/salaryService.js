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
                await db.Salary.create({
                    staffId: inputData.staffId,
                    basicSalaries: inputData.basicSalary,
                    deductionSalaries: inputData.basicSalary / 24 * inputData.deductionSalary,
                    // date: new Date(),
                    month: inputData.month
                })

                await db.DeductionSalary.create({
                    staffId: inputData.staffId,
                    quantity: inputData.deductionSalary,
                    // date: new Date(),
                    month: inputData.month
                })

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

module.exports = {
    saveBasicSalaryService: saveBasicSalaryService,
    getBasicSalaryByIdService: getBasicSalaryByIdService,
}