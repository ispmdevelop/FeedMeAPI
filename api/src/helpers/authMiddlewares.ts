import { NextFunction } from "express";

export function adminRequired(req, res, next) {
    try {
        if (
            req.session != null &&
            req.session.id != null &&
            req.session.role == "ADMIN"
        ) {
            next();
        } else {
            var error: Error = new Error("Dont have permission");
            error.name = "Auth Error";
            throw error;
        }
    } catch (e) {
        next({ name: e.name, message: e.message });
    }
}

export function loggedRequired(req, res, next) {
    try {
        if (req.session != null && req.session.id != null) {
            next();
        } else {
            var error: Error = new Error("You do not have permission");
            error.name = "Auth Error";
            throw error;
        }
    } catch (e) {
        next({ name: e.name, message: e.message });
    }
}

export function sameUserIdOrAdminUser(req, res, next) {
    try {
        var id = req.params.id || req.params.userid;
        if (
            (req.session != null && id == req.session.id) ||
            req.session.role == "ADMIN"
        ) {
            next();
        } else {
            var error: Error = new Error("Dont have permission");
            error.name = "Auth Error";
            throw error;
        }
    } catch (e) {
        next({ name: e.name, message: e.message });
    }
}
