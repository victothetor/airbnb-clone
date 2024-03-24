import userService from "@/server/service/User";

export async function POST(request) {
    const requestBody = await request.json(); 

    const { userName, userEmail, userPassword } = requestBody;

    if (!userName || !userEmail || !userPassword){
        return new Response(JSON.stringify({
            message: "Invalid user information"
        }), {
          headers: {
            'Content-Type': 'application/json',
          },
          status: 403
        })
    }

    const newUser = {
      name: userName,
      email: userEmail,
      password: userPassword
    };

    const response = {};
    try {
        userService.addUser(newUser);
    } catch (err) {
        response.message = err.message;
        return new Response(JSON.stringify(response), {
          headers: {
            'Content-Type': 'application/json',
          },
          status: 409
        })
    }
    response.message = "Success";

    return new Response(JSON.stringify(response), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 200
    });
}