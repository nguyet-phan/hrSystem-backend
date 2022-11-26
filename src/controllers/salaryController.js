import salaryService from "../services/salaryService";

let postBasicSalary = async (req, res) => {
    try {
        let response = await salaryService.saveBasicSalaryService(req.body);
        return res.status(200).json(response);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let getBasicSalaryById = async (req, res) => {
    try {
        let basicSa = await salaryService.getBasicSalaryByIdService(req.query.id);
        return res.status(200).json(basicSa);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let getAllBonusSalaryByMonth = async (req, res) => {
    let staffId = req.query.staffId;
    let month = req.query.month;
    if (!staffId || !month) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameters',
            bonusSalaries: []
        })
    }

    let bonusSalaries = await salaryService.getAllBonusSalaryByMonth(staffId, month);

    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        bonusSalaries
    })

}

let getAllSalaryByMonth = async (req, res) => {
    let Salaries = await salaryService.getAllSalaryByMonth(req.query.staffId, req.query.month);

    return res.status(200).json({
        Salaries
    })
}

module.exports = {
    postBasicSalary: postBasicSalary,
    getBasicSalaryById: getBasicSalaryById,
    getAllBonusSalaryByMonth: getAllBonusSalaryByMonth,

    getAllSalaryByMonth: getAllSalaryByMonth,
}