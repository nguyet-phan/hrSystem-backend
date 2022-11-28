import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import salaryController from "../controllers/salaryController";
import eventController from "../controllers/eventController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/about", homeController.getAboutPage);
    router.get("/crud", homeController.getCRUD);
    router.post("/post-crud", homeController.postCRUD);
    router.get("/get-crud", homeController.displayGetCRUD);
    router.get("/edit-crud", homeController.getEditCRUD);
    router.post("/put-crud", homeController.putCRUD);
    router.get("/delete-crud", homeController.deleteCRUD);


    router.post("/api/login", userController.handleLogin);
    router.get("/api/get-all-users", userController.handleGetAllUsers);
    router.post("/api/create-new-user", userController.handleCreateNewUser);
    router.put("/api/edit-user", userController.handleEditUser);
    router.delete("/api/delete-user", userController.handleDeleteUser); //restAPI

    router.get("/api/allcode", userController.getAllCode);
    router.get("/api/get-all-managers", userController.getAllManagers);

    router.get("/api/get-all-events", eventController.handleGetAllEvents);
    router.post("/api/create-new-event", eventController.handleCreateNewEvent);
    router.put("/api/edit-event", eventController.handleEditEvent);
    router.delete("/api/delete-event", eventController.handleDeleteEvent);

    router.post("/api/save-basic-salary", salaryController.postBasicSalary);
    router.get("/api/get-basic-salary-by-id", salaryController.getBasicSalaryById);
    router.get("/api/get-bonus-salary-by-id", salaryController.getBonusSalaryById);
    router.get("/api/get-project-salary-by-id", salaryController.getProjectSalaryById);
    router.get("/api/get-overtime-salary-by-id", salaryController.getOvertimeSalaryById);
    router.get("/api/get-onsite-salary-by-id", salaryController.getOnsiteSalaryById);
    router.get("/api/get-deduction-salary-by-id", salaryController.getDeductionSalaryById);

    router.get("/api/get-all-salary-by-month", salaryController.getAllSalaryByMonth); //Salary by staffId and month

    return app.use("/", router);
}

module.exports = initWebRoutes;