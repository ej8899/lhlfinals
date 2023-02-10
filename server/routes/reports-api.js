/*
 * All routes for reports are defined here
 */

const express = require("express");
const router = express.Router();
const q_reports = require("../db/queries/q_reports");


/**
 * Get all reports for a specific resource
 * @return {json} All reports pertain to a resource id in db that are not deleted
 */
router.get("/resources/:id", (req, res) => {
  const id = req.params.id
  q_reports
    .getReportsByResourceId(id)
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("Error retrieving reports", err);
      res.status(500).json({ error: err.message });
    });
});

/**
 * Save new report
 * @return {json} report that is saved
 * 
 */
router.post("/", (req, res) => {
  //const userId = req.session.userID;
  const reportData = req.body;

  q_reports
    .postReport(reportData)
    .then((data) => {
      console.log("Report save returned obj: ", data);
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Error saving new report", err);
      return res.status(500).json({ error: err.message });
    });
});

/**
 * Update existing report
 * @return {json} report that is updated
 * 
 */
router.put("/:id", (req, res) => {
  //const userId = req.session.userID;
  const reportData = req.body;

  q_reports
    .updateReport(reportData)
    .then((data) => {
      console.log("Report updated returned obj: ", data);
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Error updating report", err);
      return res.status(500).json({ error: err.message });
    });
});

/**
 * Delete existing report
 * @return {json} report that is deleted
 * 
 */
router.delete("/:id", (req, res) => {
  //const userId = req.session.userID;
  const reportId = req.params.id;
  const reportData = {id : reportId};

  q_reports
    .deleteReport(reportData)
    .then((data) => {
      console.log("Report deleted returned obj: ", data);
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Error deleting report", err);
      return res.status(500).json({ error: err.message });
    });
});

module.exports = router;
