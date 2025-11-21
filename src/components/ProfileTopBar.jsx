import '../App.css';

const ProfileTopBar = ({profile}) => {
    return (
        <div
        id='profileTopBar'
        className='profile-top-bar'
        >
           <p className='{title-text}'>GoobApp</p>
           <img className='profile-picture' src={profile.userProfilePicture} alt="Profile Picture"></img>

        </div>
    )
}

export default ProfileTopBar;