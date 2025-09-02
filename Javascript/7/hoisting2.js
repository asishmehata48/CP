// notHoisted(); // Error: Cannot access 'notHoisted' before initialization

const notHoisted = function() {
    console.log("I am NOT hoisted!");
};
