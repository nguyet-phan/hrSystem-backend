import db from "../models/index";

let saveBasicSalaryService = (inputData) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!inputData.staffId || !inputData.basicSalary || !inputData.month) {
                resolve({
                    errCode: 1,
                    errMessage: "Thiếu thông tin nhân viên/ tháng/ lương cơ bản!"
                })
            } else {

                let distance = new Date(inputData.endDay).getTime() - new Date(inputData.startDay).getTime();    //Future date - current date
                let onsiteDays = Math.floor(distance / (1000 * 60 * 60 * 24));

                //upsert table Salaries
                let staffSalary = await db.Salary.findOne({
                    where: {
                        staffId: inputData.staffId,
                        month: inputData.month
                    },
                    raw: false
                })

                if (staffSalary) {
                    //update
                    staffSalary.staffId = inputData.staffId;
                    staffSalary.basicSalaries = inputData.basicSalary;
                    staffSalary.projectSalaries = inputData.projectSalary;
                    staffSalary.bonusSalaries = inputData.bonusSalary;
                    staffSalary.overtimeSalaries = inputData.basicSalary / 24 / 8 * inputData.overtimeHours;
                    staffSalary.onsiteSalaries = onsiteDays * 50000;
                    staffSalary.deductionSalaries = inputData.basicSalary / 24 * inputData.deductionSalary;

                    await staffSalary.save();
                } else {
                    //create
                    await db.Salary.create({
                        staffId: inputData.staffId,
                        month: inputData.month,
                        basicSalaries: inputData.basicSalary,
                        projectSalaries: inputData.projectSalary,
                        bonusSalaries: inputData.bonusSalary,
                        overtimeSalaries: (inputData.basicSalary / 23 / 8) * 1.5 * inputData.overtimeHours,
                        onsiteSalaries: (onsiteDays + 1) * 50000,
                        deductionSalaries: inputData.basicSalary / 23 * inputData.deductionSalary,
                    })
                }

                // ----------------------------------------------------------------------
                //upsert table deductionSalaries
                let staffDeductionSalary = await db.DeductionSalary.findOne({
                    where: {
                        staffId: inputData.staffId,
                        month: inputData.month
                    },
                    raw: false
                })

                if (staffDeductionSalary) {
                    //update
                    staffDeductionSalary.staffId = inputData.staffId;
                    staffDeductionSalary.quantity = inputData.deductionSalary;

                    await staffDeductionSalary.save();
                } else {
                    //create
                    await db.DeductionSalary.create({
                        staffId: inputData.staffId,
                        month: inputData.month,
                        quantity: inputData.deductionSalary,
                    })
                }

                // ----------------------------------------------------------------------
                //upsert table bonusSalaries
                let staffBonusSalary = await db.BonusSalary.findOne({
                    where: {
                        staffId: inputData.staffId,
                        month: inputData.month
                    },
                    raw: false
                })

                if (staffBonusSalary) {
                    //update
                    staffBonusSalary.staffId = inputData.staffId;
                    staffBonusSalary.reason = inputData.reason;
                    staffBonusSalary.salary = inputData.bonusSalary;

                    await staffBonusSalary.save();
                } else {
                    //create
                    await db.BonusSalary.create({
                        staffId: inputData.staffId,
                        month: inputData.month,
                        reason: inputData.reason,
                        salary: inputData.bonusSalary
                    })
                }

                // ----------------------------------------------------------------------
                //upsert table projectSalaries
                let staffProjectSalary = await db.ProjectSalary.findOne({
                    where: {
                        staffId: inputData.staffId,
                        month: inputData.month
                    },
                    raw: false
                })

                if (staffProjectSalary) {
                    //update
                    staffProjectSalary.staffId = inputData.staffId;
                    staffProjectSalary.projectName = inputData.projectName;
                    staffProjectSalary.salary = inputData.projectSalary;

                    await staffProjectSalary.save();
                } else {
                    //create
                    await db.ProjectSalary.create({
                        staffId: inputData.staffId,
                        month: inputData.month,
                        projectName: inputData.projectName,
                        salary: inputData.projectSalary
                    })
                }

                // ----------------------------------------------------------------------
                //upsert table onsiteSalaries
                let staffOnsiteSalary = await db.OnsiteSalary.findOne({
                    where: {
                        staffId: inputData.staffId,
                        month: inputData.month
                    },
                    raw: false
                })

                if (staffOnsiteSalary) {
                    //update
                    staffOnsiteSalary.staffId = inputData.staffId;
                    staffOnsiteSalary.place = inputData.onsitePlace;
                    staffOnsiteSalary.startDay = inputData.startDay;
                    staffOnsiteSalary.endDay = inputData.endDay;

                    await staffOnsiteSalary.save();
                } else {
                    //create
                    await db.OnsiteSalary.create({
                        staffId: inputData.staffId,
                        month: inputData.month,
                        place: inputData.onsitePlace,
                        startDay: inputData.startDay,
                        endDay: inputData.endDay,
                    })
                }

                // ----------------------------------------------------------------------
                //upsert table overtimeSalaries
                let staffOvertimeSalary = await db.OvertimeSalary.findOne({
                    where: {
                        staffId: inputData.staffId,
                        month: inputData.month
                    },
                    raw: false
                })

                if (staffOvertimeSalary) {
                    //update
                    staffOvertimeSalary.staffId = inputData.staffId;
                    staffOvertimeSalary.hour = inputData.overtimeHours;

                    await staffOvertimeSalary.save();
                } else {
                    //create
                    await db.OvertimeSalary.create({
                        staffId: inputData.staffId,
                        month: inputData.month,
                        hour: inputData.overtimeHours,
                    })
                }

                resolve({
                    errCode: 0,
                    errMessage: "Save salary succeed!"
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getBasicSalaryByIdService = (staffId, month) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!staffId || !month) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing parameter!"
                })
            } else {

                let data = await db.Salary.findOne({
                    where: {
                        staffId: staffId,
                        month: month
                    },
                    raw: true,
                    nest: true
                })

                if (!data) data = {};

                resolve(data)
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getBonusSalaryByIdService = (staffId, month) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!staffId || !month) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing parameter!"
                })
            } else {

                let data = await db.BonusSalary.findOne({
                    where: {
                        staffId: staffId,
                        month: month
                    },
                    raw: true,
                    nest: true
                })

                if (!data) data = {};

                resolve(data)
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getProjectSalaryByIdService = (staffId, month) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!staffId || !month) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing parameter!"
                })
            } else {

                let data = await db.ProjectSalary.findOne({
                    where: {
                        staffId: staffId,
                        month: month
                    },
                    raw: true,
                    nest: true
                })

                if (!data) data = {};

                resolve(data)
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getOvertimeSalaryByIdService = (staffId, month) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!staffId || !month) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing parameter!"
                })
            } else {

                let data = await db.OvertimeSalary.findOne({
                    where: {
                        staffId: staffId,
                        month: month
                    },
                    raw: true,
                    nest: true
                })

                if (!data) data = {};

                resolve(data)
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getOnsiteSalaryByIdService = (staffId, month) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!staffId || !month) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing parameter!"
                })
            } else {

                let data = await db.OnsiteSalary.findOne({
                    where: {
                        staffId: staffId,
                        month: month
                    },
                    raw: true,
                    nest: true
                })

                if (!data) data = {};

                resolve(data)
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getDeductionSalaryByIdService = (staffId, month) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!staffId || !month) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing parameter!"
                })
            } else {

                let data = await db.DeductionSalary.findOne({
                    where: {
                        staffId: staffId,
                        month: month
                    },
                    raw: true,
                    nest: true
                })

                if (!data) data = {};

                resolve(data)
            }
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
    getBonusSalaryByIdService: getBonusSalaryByIdService,
    getProjectSalaryByIdService: getProjectSalaryByIdService,
    getOvertimeSalaryByIdService: getOvertimeSalaryByIdService,
    getOnsiteSalaryByIdService: getOnsiteSalaryByIdService,
    getDeductionSalaryByIdService: getDeductionSalaryByIdService,

    getAllSalaryByMonth: getAllSalaryByMonth,
}