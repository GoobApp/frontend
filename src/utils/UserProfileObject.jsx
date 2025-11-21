const createProfileObject = (newUserDisplayName, newUserID, newUserProfilePicture) => {
    let inputObject = {
        userDisplayName: newUserDisplayName,
        userID: newUserID,
        userProfilePicture: newUserProfilePicture,
    }

    return inputObject;
}

export default createProfileObject;