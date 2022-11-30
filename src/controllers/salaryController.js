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
        let staffId = req.query.staffId;
        let month = req.query.month;
        let data = await salaryService.getBasicSalaryByIdService(staffId, month);

        return res.status(200).json({
            errCode: 0,
            errMessage: 'OK',
            data
        })
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let getBonusSalaryById = async (req, res) => {
    try {
        let staffId = req.query.staffId;
        let month = req.query.month;
        if (!staffId || !month) {
            return res.status(200).json({
                errCode: 1,
                errMessage: 'Missing required parameters',
                data: []
            })
        }

        let data = await salaryService.getBonusSalaryByIdService(staffId, month);

        return res.status(200).json({
            errCode: 0,
            errMessage: 'OK',
            data
        })
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let getProjectSalaryById = async (req, res) => {
    try {
        let staffId = req.query.staffId;
        let month = req.query.month;
        if (!staffId || !month) {
            return res.status(200).json({
                errCode: 1,
                errMessage: 'Missing required parameters',
                data: []
            })
        }

        let data = await salaryService.getProjectSalaryByIdService(staffId, month);

        return res.status(200).json({
            errCode: 0,
            errMessage: 'OK',
            data
        })
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let getOvertimeSalaryById = async (req, res) => {
    try {
        let staffId = req.query.staffId;
        let month = req.query.month;
        if (!staffId || !month) {
            return res.status(200).json({
                errCode: 1,
                errMessage: 'Missing required parameters',
                data: []
            })
        }

        let data = await salaryService.getOvertimeSalaryByIdService(staffId, month);

        return res.status(200).json({
            errCode: 0,
            errMessage: 'OK',
            data
        })
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let getOnsiteSalaryById = async (req, res) => {
    try {
        let staffId = req.query.staffId;
        let month = req.query.month;
        if (!staffId || !month) {
            return res.status(200).json({
                errCode: 1,
                errMessage: 'Missing required parameters',
                data: []
            })
        }

        let data = await salaryService.getOnsiteSalaryByIdService(staffId, month);

        return res.status(200).json({
            errCode: 0,
            errMessage: 'OK',
            data
        })
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let getDeductionSalaryById = async (req, res) => {
    try {
        let staffId = req.query.staffId;
        let month = req.query.month;
        if (!staffId || !month) {
            return res.status(200).json({
                errCode: 1,
                errMessage: 'Missing required parameters',
                data: []
            })
        }

        let data = await salaryService.getDeductionSalaryByIdService(staffId, month);

        return res.status(200).json({
            errCode: 0,
            errMessage: 'OK',
            data
        })
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let getAllSalaryByMonth = async (req, res) => {
    try {
        let data = await salaryService.getAllSalaryByMonth(req.query.staffId, req.query.month);

        return res.status(200).json({
            errCode: 0,
            data
        })

    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

module.exports = {
    postBasicSalary: postBasicSalary,
    getBasicSalaryById: getBasicSalaryById,
    getBonusSalaryById: getBonusSalaryById,
    getProjectSalaryById: getProjectSalaryById,
    getOvertimeSalaryById: getOvertimeSalaryById,
    getOnsiteSalaryById: getOnsiteSalaryById,
    getDeductionSalaryById: getDeductionSalaryById,

    getAllSalaryByMonth: getAllSalaryByMonth,
}