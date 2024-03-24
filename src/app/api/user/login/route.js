import userService from "@/server/service/User";

export async function POST(request) {
    const requestBody = await request.json(); // Parse the request body

    const userEmail = requestBody.userEmail;
    const userPassword = requestBody.userPassword;
  
    const loginUser = {
      email: userEmail,
      password: userPassword,
    };

    const response = {};

    const foundUser = userService.findUserByEmail(userEmail);
    console.log(foundUser);
    if (foundUser && foundUser.password === loginUser.password) {
        // Passwords match
        response.message = "Passwords match";
        response.userEmail = foundUser.email;
        response.userName = foundUser.name; 
    } else {
        // Passwords don't match or user not found
        response.message = "Passwords don't match or user not found";
        return new Response(JSON.stringify(response), {
            status: 401,
            headers: {
              'Content-Type': 'application/json',
            },
        });
    }

    return new Response(JSON.stringify(response), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
}
