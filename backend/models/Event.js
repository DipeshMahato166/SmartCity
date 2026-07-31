const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            required: true,
            trim: true,
        },

        category: {
            type: String,
            enum: [
                "Health Camp",
                "Blood Donation",
                "Agriculture",
                "Training",
                "Meeting",
                "Festival",
                "Sports",
                "Education",
                "Culture",
                "Environment",
                "Other",
            ],
            default: "Other",
        },

        image: {
            url: {
                type: String,
                default: "",
            },
            publicId: {
                type: String,
                default: "",
            },
            altText: {
                type: String,
                default: "",
            },
        },

        location: {
            province: String,
            district: String,
            municipality: String,
            ward: String,
            tole: String,
            venue: String,
        },

        organizer: {
            type: String,
            required: true,
            trim: true,
        },

        contact: {
            type: String,
            requierd: true,
            trim: true,
        },

        email: {
            type: String,
            default: "",
            trim: true,
        },

        startDate: {
            type: Date,
            required: true,
        },

        endDate: {
            type: Date,
            required: true,
        },

        startTime: {
            type: String,
            required: true,
        },

        endTime: {
            type: String,
            required: true,
        },

        registrationLink: {
            type: String,
            default: "",
        },

        isRegistrationRequired: {
            type: Boolean,
            default: false,
        },

        status: {
            type: String,
            enum: ["upcoming", "ongoing", "completed", "cancelled"],
            default: "upcoming",
        },

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true, }
)

module.exports = mongoose.model("Event", eventSchema);