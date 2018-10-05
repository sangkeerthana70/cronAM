const CronJob = require('cron').CronJob;

const mainWorker = new CronJob(
    "*/5 * * * * *",
    function () {
        //console.log("You will see this message in your console each second or not at all");
        //console.log("Your server starts every 10 seconds");
        console.log("every 5 seconds");
    },
    null,
    false,
    "America/New_York"
);

module.exports = mainWorker;