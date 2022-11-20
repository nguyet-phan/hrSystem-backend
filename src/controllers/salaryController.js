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

module.exports = {
    postBasicSalary: postBasicSalary,
    getBasicSalaryById: getBasicSalaryById,
}