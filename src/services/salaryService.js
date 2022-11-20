import db from "../models/index";

let saveBasicSalaryService = (inputData) => {
    console.log(inputData);
    return new Promise(async (resolve, reject) => {
        try {
            if (!inputData.staffId || !inputData.basicSalary) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing parameter"
                })
            } else {
                await db.Salary.create({
                    staffId: inputData.staffId,
                    basicSalaries: inputData.basicSalary,
                    date: new Date(),
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