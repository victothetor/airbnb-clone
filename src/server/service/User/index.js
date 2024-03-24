class UserService {
    constructor() {
      this.users = []; // Empty array to store users
    }
    addUser(user) {
      const existingUser = this.users.find(u => u.email === user.email);
      if (existingUser) {
        throw new Error('User with the same email already exists');
      }
      this.users.push(user);
    }

    findUserByEmail(email) {
        console.log(this.users )
        return this.users.find(user => user.email === email) || null;
    }
}
const userService = new UserService()
export default userService;