function wellcomeMessage(name, handeler) {
    handeler(name);
}


function goodMorning(name) {
    console.log('Good Morning', name);
}

wellcomeMessage('Abu Shama', goodMorning);