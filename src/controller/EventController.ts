import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Event } from "../entity/Event";

export class EventController {

    private eventRepository = getRepository(Event);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.eventRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.eventRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        let data = request.body;
        // [todo] remove
        if(data.datetime){
            let _date = new Date(data.datetime);
            data.year = _date.getUTCFullYear();
            data.month = _date.getUTCMonth();
            data.date = _date.getUTCDate();
            data.hours = _date.getUTCHours();
        }
        return this.eventRepository.save(data);
    }

    async modify(request: Request, response: Response, next: NextFunction) {
        let _event = await this.eventRepository.findOne(request.params.id)
        _event  = {
            ..._event,
            ...request.body,
        }
        return this.eventRepository.save(_event);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let eventToRemove = await this.eventRepository.findOne(request.params.id);
        await this.eventRepository.remove(eventToRemove);
    }

    async removeAll(request: Request, response: Response, next: NextFunction) {
        return this.eventRepository.delete({})
    }

}