const express = require("express");
const Event = require("../models/Event");
const { protect } = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const {
  eventUpload,
  uploadFileToCloudinary,
  cloudinary,
} = require("../config/cloudinaryConfig");

const router = express.Router();

// @route POST /api/events
// @desc Create Event
// @access Private/Admin
router.post("/", protect, role("admin"), eventUpload, async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      organizer,
      contact,
      email,
      startDate,
      endDate,
      startTime,
      endTime,
      registrationLink,
      isRegistrationRequired,
      province,
      district,
      municipality,
      ward,
      tole,
      venue,
    } = req.body;

    if (
      !title ||
      !description ||
      !organizer ||
      !contact ||
      !startDate ||
      !endDate
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    let image = {};

    if (req.file) {
      const uploaded = await uploadFileToCloudinary(req.file);

      image = {
        url: uploaded.secure_url,
        publicId: uploaded.public_Id,
        altText: title,
      };
    }

    const event = new Event({
      title,
      description,
      category,
      image,
      organizer,
      contact,
      email,
      startDate,
      endDate,
      startTime,
      endTime,
      registrationLink,
      isRegistrationRequired,

      location: {
        province,
        district,
        municipality,
        ward,
        tole,
        venue,
      },

      createdBy: req.user._id,
    });

    await event.save();

    res.status(201).json({
      success: true,
      message: "Event created successfully.",
      event,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// @route GET /api/events
// @desc Get All Events
// @access Public
router.get("/", async (req, res) => {
  try {
    const events = await Event.find()
      .populate("createdBy", "name email")
      .sort({ startDate: 1 });

    res.status(200).json({
      success: true,
      events,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// @route GET /api/events/:id
// @desc Get Single Event
// @access Public
router.get("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate(
      "createdBy",
      "name email",
    );

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found.",
      });
    }

    res.status(200).json({
      success: true,
      event,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// @route PUT /api/events/:id
// @desc Update Event
// @access Private/Admin
router.put("/:id", protect, role("admin"), async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not fouund.",
      });
    }

    // Upload new image if provided
    if (req.file) {
      // Delete old image fom Cloudinary
      if (event.image?.publicId) {
        await cloudinary.uploader.destroy(event.image.publicId);

        // upload new image
        const uploaded = await uploadFileToCloudinary(req.file);

        req.body.image = {
          url: uploaded.secure_url,
          publicId: uploaded.public_id,
          altText: req.body.title || event.title,
        };
      }

      const updatedEvent = await Event.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        },
      );

      res.status(200).json({
        success: true,
        message: "Event updated successfully.",
        event: updatedEvent,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// @route DELETE /api/events/:id
// @desc Delete Event
//@access Private/Admin
router.delete("/:id", protect, role("admin"), async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found.",
      });
    }

    await event.deleteOne();

    res.status(200).json({
      success: true,
      message: "Event deleted successfully.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


module.exports = router;