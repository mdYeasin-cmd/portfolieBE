import { Schema, model } from "mongoose";

const experienceSchema = new Schema(
    {
        designation: {
            type: String,
            required: true,
        },
        employmentType: {
            type: String,
            required: true,
            enum: [
                "Full-time",
                "Part-time",
                "Contract",
                "Internship",
                "Freelance",
            ],
        },
        companyName: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        locationType: {
            type: String,
            required: true,
            enum: ["On-site", "Remote", "Hybrid"],
        },
        startDate: { type: Date, required: true },
        endDate: { type: Date },
        description: { type: String },
    },
    {
        timestamps: true,
    }
);

const Experience = model("Experience", experienceSchema);

export default Experience;
