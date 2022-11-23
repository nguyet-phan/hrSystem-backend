import db from '../models/index';

let getAllEvents = (eventId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let events = '';
            if (eventId === 'ALL') {
                events = await db.Event.findAll({
                    order: [['id', 'DESC']],
                    raw: true,
                    nest: true
                })
            }
            if (eventId && eventId !== 'ALL') {
                events = await db.Event.findOne({
                    where: {
                        id: eventId
                    },
                    raw: true,
                    nest: true
                })
            }

            resolve(events);
        } catch (e) {
            reject(e);
        }
    })
}

let createNewEvent = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Event.create({
                eventName: data.eventName,
                startDay: data.startDay,
                endDay: data.endDay

            })

            resolve({
                errCode: 0,
                errMessage: 'OK'
            });
        } catch (e) {
            reject(e);
        }
    })
}

let deleteEvent = (eventId) => {
    return new Promise(async (resolve, reject) => {
        let event = await db.Event.findOne({
            where: { id: eventId }
        })
        if (!event) {
            resolve({
                errCode: 2,
                errMessage: `The event isn't exist!`
            })
        }

        await db.Event.destroy({
            where: { id: eventId }
        });

        resolve({
            errCode: 0,
            errMessage: 'Delete succeed!'
        })
    })
}

let updateEventData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.eventName || !data.startDay || !data.endDay) {
                resolve({
                    errCode: 2,
                    errMessage: 'Missing required parameter!'
                })
            }
            let event = await db.Event.findOne({
                where: { id: data.id },
                raw: false
            })
            if (event) {
                event.eventName = data.eventName;
                event.startDay = data.startDay;
                event.endDay = data.endDay;

                await event.save();

                resolve({
                    errCode: 0,
                    errMessage: 'Update the event succeed!'
                })
            }
            else {
                resolve({
                    errCode: 1,
                    errMessage: 'Event is not found!'
                });
            }
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    getAllEvents: getAllEvents,
    createNewEvent: createNewEvent,
    deleteEvent: deleteEvent,
    updateEventData: updateEventData
}