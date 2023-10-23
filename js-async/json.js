// Task 1
const userSettings = {
    username: "john_doe",
    theme: "dark",
    language: "en",
    notifications: true,
};

const userSettingsJSON = JSON.stringify(userSettings);
console.log(userSettingsJSON);

const deserializedUserSettings = JSON.parse(userSettingsJSON);
console.log(deserializedUserSettings);

