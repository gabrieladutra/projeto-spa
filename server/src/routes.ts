import express from "express";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedback-repository";

export const routes = express.Router();

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "e692c0bcadd1bc",
        pass: "9c72523c22b6ba",
    },
});

routes.post("/feedbacks", async (req, res) => {
    const { type, comment, screenshot } = req.body;
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(PrismaFeedbacksRepository)
    await submitFeedbackUseCase.execute({
      type,
      comment,
      screenshot,
    })
    // await transport.sendMail({
    //     from: "Equipe FeedGet",
    //     to: "Gabriela Dutra <gabriela_ddutra@outlook.com>",
    //     subject: "Novo feedback",
    //     html: [
    //         `<div style="font-family:sans-serif; font-size: 16px; color:#111;">`,
    //         `<p>Tipo do feedback: ${type}</p>`,
    //         `<p>Comentário: ${comment}</p>`,
    //         `</div>`,
    //     ].join("\n"),
    // });
    return res.status(201).json({ data: feedback });
});
