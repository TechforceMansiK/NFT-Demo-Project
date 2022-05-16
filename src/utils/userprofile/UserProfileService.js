import API from "../../api/Api";

export function getUserProfileDetails(walletAddress) {
  return API.post('get-user-profile-details', {walletAddress: walletAddress})
}

export function addUpdateUserProfileDetails(userProfileRequest) {
  return API.put('add-update-user-profile-details', userProfileRequest)
}