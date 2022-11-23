import eventService from '../services/eventService';

let handleGetAllEvents = async (req, res) => {
    let id = req.query.id; //ALL, id

    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameter!',
            events: []
        })
    }
    let events = await eventService.getAllEvents(id);

    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        events
    })
}

let handleCreateNewEvent = async (req, res) => {
    let message = await eventService.createNewEvent(req.body);
    return res.status(200).json(message);
}

let handleDeleteEvent = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameter!',
        })
    }
    let message = await eventService.deleteEvent(req.body.id);
    return res.status(200).json(message);
}

let handleEditEvent = async (req, res) => {
    let data = req.body;
    let message = await eventService.updateEventData(data);
    return res.status(200).json(message);
}

module.exports = {
    handleGetAllEvents: handleGetAllEvents,
    handleCreateNewEvent: handleCreateNewEvent,
    handleEditEvent: handleEditEvent,
    handleDeleteEvent: handleDeleteEvent,
}