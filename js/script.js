document.getElementById("comingUpContent").style.display = 'none';
document.getElementById("pastEventsContent").style.display = 'none';
document.getElementById("eventsWeekTab").className = 'accordionPanelTab highlight';

function hidePanels() {
    document.getElementById("comingUpContent").style.display = 'none';
    document.getElementById("pastEventsContent").style.display = 'none';
    document.getElementById("eventsWeekContent").style.display = 'none';
    document.getElementById("comingUpTab").className = 'accordionPanelTab';
    document.getElementById("pastEventsTab").className = 'accordionPanelTab';
    document.getElementById("eventsWeekTab").className = 'accordionPanelTab';
}

function showComingUp() {
    hidePanels();
    document.getElementById("comingUpContent").style.display = 'block';
    document.getElementById("comingUpTab").classicName = 'accordionPanelTab highlight';
}

function showPastEvents() {
    hidePanels();
    document.getElementById("pastEventsContent").style.display = 'block';
    document.getElementById("pastEventsTab").className = 'accordionPanelTab highlight';
}

function showEventsWeek() {
    hidePanels();
    document.getElementById("eventsWeekTab").className = 'accordionPanelTab highlight';
    document.getElementById("eventsWeekContent").style.display = 'block';
}