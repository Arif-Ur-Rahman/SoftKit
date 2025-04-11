// services/auth.service.ts

export const loginUser = async (email: string, password: string) => {
    const formBody = new URLSearchParams();
    formBody.append("email", email);
    formBody.append("password", password);
  
    const res = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody.toString(),
    });
  
    if (!res.ok) {
      throw new Error("Login failed");
    }
  
    return await res.json();
  };
  


  // services/auth.service.ts

export const registerUser = async (username: string, email: string, password: string) => {
    const res = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });
  
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Registration failed");
    }
  
    return res.json();
  };
  