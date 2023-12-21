//Create a Set to represent followers of a social media account. Implement functions to add followers, remove followers, and check if a user is already following.
function createSocialMediaAccount() {
    const followers = new Set();
    function addFollower(user) {
        followers.add(user)
        return followers
    }
    function deleteFollower(user) {
        followers.delete(user)
        return followers
    }
    function isFollowing(user) {
        return followers.has(user) ? "This user is following" : "This user  isn't following"
    }
    return { addFollower, deleteFollower, isFollowing }

}
const res = createSocialMediaAccount();
console.log(res.addFollower("armen"));
console.log(res.addFollower("karen"));
console.log(res.deleteFollower("armen"));
console.log(res.isFollowing('karen'))