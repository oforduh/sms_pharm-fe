import { config } from "../Config.js";

export function Request(path) {
  this.path = `${config.baseUrl}/api/auth/${path}`;
}

Request.prototype.login = async function (email, password) {
  const config = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
    }),
  };

  try {
    const request = await fetch(this.path, config);
    const response = await request.json();

    if (request.status !== 200) {
      return {
        status: false,
        ...response,
      };
    }
    const profileData = response.data;
    const token = response.token;
    let userProfile = JSON.stringify(profileData);
    sessionStorage.setItem("userProfile", userProfile);
    sessionStorage.setItem("token", token);
    return {
      status: true,
      ...response,
    };
  } catch (error) {
    return {
      status: false,
      error,
    };
  }
};

Request.prototype.logout = async function (token) {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const request = await fetch(this.path, config);
    const response = await request.json();

    if (request.status !== 200) {
      return {
        status: false,
        ...response,
      };
    }
    return {
      status: true,
      ...response,
    };
  } catch (error) {
    return {
      status: false,
      error,
    };
  }
};

Request.prototype.updateUserProfile = async function (obj, token) {
  const config = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(obj),
  };

  try {
    const request = await fetch(this.path, config);
    const response = await request.json();
    if (request.status !== 200) {
      return {
        status: false,
        ...response,
      };
    }
    const profileData = response.data;
    let userProfile = JSON.stringify(profileData);
    sessionStorage.setItem("userProfile", userProfile);
    return {
      status: true,
      ...response,
    };
  } catch (error) {
    return {
      status: false,
      error,
    };
  }
};

Request.prototype.updateUserPassword = async function (obj, token) {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(obj),
  };

  try {
    const request = await fetch(this.path, config);
    const response = await request.json();
    if (request.status !== 200) {
      return {
        status: false,
        ...response,
      };
    }

    return {
      status: true,
      ...response,
    };
  } catch (error) {
    return {
      status: false,
      error,
    };
  }
};

Request.prototype.deleteUserAccount = async function (token) {
  const config = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const request = await fetch(this.path, config);
    const response = await request.json();
    if (request.status !== 200) {
      return {
        status: false,
        ...response,
      };
    }
    sessionStorage.clear();
    return {
      status: true,
      ...response,
    };
  } catch (error) {
    return {
      status: false,
      error,
    };
  }
};

Request.prototype.terminateSession = async function (token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const request = await fetch(this.path, config);
    const response = await request.json();
    if (request.status !== 200) {
      return {
        status: false,
        ...response,
      };
    }
    return {
      status: true,
      ...response,
    };
  } catch (error) {
    return {
      status: false,
      error,
    };
  }
};

Request.prototype.deleteUserAvatar = async function (token) {
  const config = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const request = await fetch(this.path, config);
    const response = await request.json();
    if (request.status !== 200) {
      return {
        status: false,
        ...response,
      };
    }
    const profileData = response.data;
    let userProfile = JSON.stringify(profileData);
    sessionStorage.setItem("userProfile", userProfile);
    return {
      status: true,
      ...response,
    };
  } catch (error) {
    return {
      status: false,
      error,
    };
  }
};

Request.prototype.getAllActivity = async function (
  token,
  page = 1,
  limit = 10,
  sort = -1
) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const request = await fetch(
      `${this.path}?sort=${sort}&limit=${limit}&page=${page}`,
      config
    );
    const response = await request.json();
    if (request.status !== 200) {
      return {
        status: false,
        ...response,
      };
    }
    return {
      status: true,
      ...response,
    };
  } catch (error) {
    return {
      status: false,
      error,
    };
  }
};

Request.prototype.getAllBranch = async function (
  token,
  page = 1,
  limit = 10,
  sort = -1
) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const request = await fetch(
      `${this.path}?sort=${sort}&limit=${limit}&page=${page}`,
      config
    );
    const response = await request.json();
    if (request.status !== 200) {
      return {
        status: false,
        ...response,
      };
    }
    return {
      status: true,
      ...response,
    };
  } catch (error) {
    return {
      status: false,
      error,
    };
  }
};

Request.prototype.updateBranchData = async function (obj, token) {
  const config = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(obj),
  };

  try {
    const request = await fetch(this.path, config);
    const response = await request.json();
    if (request.status !== 200) {
      return {
        status: false,
        ...response,
      };
    }
    return {
      status: true,
      ...response,
    };
  } catch (error) {
    return {
      status: false,
      error,
    };
  }
};

Request.prototype.createBranchData = async function (obj, token) {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(obj),
  };
  try {
    const request = await fetch(this.path, config);
    const response = await request.json();
    if (request.status !== 200) {
      return {
        status: false,
        ...response,
      };
    }
    return {
      status: true,
      ...response,
    };
  } catch (error) {
    return {
      status: false,
      error,
    };
  }
};

Request.prototype.thrashBranchData = async function (token) {
  const config = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const request = await fetch(this.path, config);
    const response = await request.json();
    if (request.status !== 200) {
      return {
        status: false,
        ...response,
      };
    }
    return {
      status: true,
      ...response,
    };
  } catch (error) {
    return {
      status: false,
      error,
    };
  }
};

Request.prototype.getAllThrash = async function (
  token,
  page = 1,
  limit = 10,
  sort = -1
) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const request = await fetch(
      `${this.path}?sort=${sort}&page=${page}&limit=${limit}`,
      config
    );
    const response = await request.json();
    if (request.status !== 200) {
      return {
        status: false,
        ...response,
      };
    }
    return {
      status: true,
      ...response,
    };
  } catch (error) {
    return {
      status: false,
      error,
    };
  }
};

Request.prototype.deleteBranchData = async function (token) {
  const config = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const request = await fetch(this.path, config);
    const response = await request.json();
    if (request.status !== 200) {
      return {
        status: false,
        ...response,
      };
    }
    return {
      status: true,
      ...response,
    };
  } catch (error) {
    return {
      status: false,
      error,
    };
  }
};

Request.prototype.restoreBranchData = async function (token) {
  const config = {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const request = await fetch(this.path, config);
    const response = await request.json();
    if (request.status !== 200) {
      return {
        status: false,
        ...response,
      };
    }
    return {
      status: true,
      ...response,
    };
  } catch (error) {
    return {
      status: false,
      error,
    };
  }
};

Request.prototype.thrashSelectedBranchData = async function (token, obj) {
  const config = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(obj),
  };

  try {
    const request = await fetch(this.path, config);
    const response = await request.json();
    if (request.status !== 200) {
      return {
        status: false,
        ...response,
      };
    }
    return {
      status: true,
      ...response,
    };
  } catch (error) {
    return {
      status: false,
      error,
    };
  }
};
