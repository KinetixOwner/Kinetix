export interface DailyPuzzle {
    id: number;
    language: string;
    title: string;
    buggyCode: string;
    correctCode: string;
    anomalyDescription: string;
    choices: string[];
  }
  
  export const puzzles: DailyPuzzle[] = [
    {
      id: 1,
      language: "javascript",
      title: "The Unbound Iteration Anomaly",
      anomalyDescription: "Infinite iterator tracking cascade. Loop logic increments reference tracking variable inversely.",
      buggyCode: "for (let i = 10; i > 0; i++) {\n  console.log(\"KINETIX_OS // Sync Node: \" + i);\n}",
      correctCode: "for (let i = 10; i > 0; i--) {\n  console.log(\"KINETIX_OS // Sync Node: \" + i);\n}",
      choices: [
        "for (let i = 10; i >= 0; i++) {\n  console.log(\"KINETIX_OS // Sync Node: \" + i);\n}",
        "for (let i = 10; i > 0; i--) {\n  console.log(\"KINETIX_OS // Sync Node: \" + i);\n}",
        "for (const i = 10; i > 0; i++) {\n  console.log(\"KINETIX_OS // Sync Node: \" + i);\n}",
        "for (let i = 10; i != 0; i++) {\n  console.log(\"KINETIX_OS // Sync Node: \" + i);\n}"
      ]
    },
    {
      id: 2,
      language: "python",
      title: "Mutable Identity State Leak",
      anomalyDescription: "Default function arguments instantiate static instance pointers across concurrent execution stacks.",
      buggyCode: "def append_user_node(user_id, active_nodes=[]):\n    active_nodes.append(user_id)\n    return active_nodes",
      correctCode: "def append_user_node(user_id, active_nodes=None):\n    if active_nodes is None:\n        active_nodes = []\n    active_nodes.append(user_id)\n    return active_nodes",
      choices: [
        "def append_user_node(user_id, active_nodes=None):\n    if active_nodes is None:\n        active_nodes = []\n    active_nodes.append(user_id)\n    return active_nodes",
        "def append_user_node(user_id, active_nodes=set()):\n    active_nodes.add(user_id)\n    return active_nodes",
        "def append_user_node(user_id, active_nodes=[]) -> list:\n    return active_nodes.copy().append(user_id)",
        "def append_user_node(user_id, active_nodes=[]):\n    global active_nodes\n    active_nodes.append(user_id)\n    return active_nodes"
      ]
    },
    {
      id: 3,
      language: "javascript",
      title: "Asynchronous Mapping Allocation Fault",
      anomalyDescription: "Array processing map operations terminate context bindings before resolution promises evaluate.",
      buggyCode: "const fetchUserData = async (ids) => {\n  return ids.map(async (id) => {\n    return await db.fetchProfile(id);\n  });\n};",
      correctCode: "const fetchUserData = async (ids) => {\n  return Promise.all(ids.map(async (id) => {\n    return await db.fetchProfile(id);\n  }));\n};",
      choices: [
        "const fetchUserData = async (ids) => {\n  return ids.forEach(async (id) => {\n    await db.fetchProfile(id);\n  });\n};",
        "const fetchUserData = (ids) => {\n  return ids.flatMap((id) => db.fetchProfile(id));\n};",
        "const fetchUserData = async (ids) => {\n  return Promise.all(ids.map(async (id) => {\n    return await db.fetchProfile(id);\n  }));\n};",
        "const fetchUserData = async (ids) => {\n  return await ids.map((id) => db.fetchProfile(id));\n};"
      ]
    },
    {
      id: 4,
      language: "html",
      title: "Hierarchical Document Structuring Malformation",
      anomalyDescription: "Inline contextual block level node injection violating W3C nested structural alignment policies.",
      buggyCode: "<a href=\"/dashboard\">\n  <div>\n    <p>Launch Terminal Platform Core Interface</p>\n  </div>\n</a>",
      correctCode: "<a href=\"/dashboard\" style=\"display: block;\">\n  <span>\n    <span style=\"display: block;\">Launch Terminal Platform Core Interface</span>\n  </span>\n</a>",
      choices: [
        "<a href=\"/dashboard\" style=\"display: block;\">\n  <span>\n    <span style=\"display: block;\">Launch Terminal Platform Core Interface</span>\n  </span>\n</a>",
        "<a href=\"/dashboard\">\n  <section>\n    <p>Launch Terminal Platform Core Interface</p>\n  </section>\n</a>",
        "<div>\n  <a href=\"/dashboard\">\n    <div>Launch Terminal Platform Core Interface</div>\n  </a>\n</div>",
        "<a><p href=\"/dashboard\">Launch Terminal Platform Core Interface</p></a>"
      ]
    },
    {
      id: 5,
      language: "javascript",
      title: "Lexical Scope Context Inversion",
      anomalyDescription: "Dynamic tracking references lose visibility scope inside nested timer function bindings.",
      buggyCode: "const sessionTracker = {\n  pulseCount: 0,\n  startPulse() {\n    setInterval(function() {\n      this.pulseCount++;\n    }, 1000);\n  }\n};",
      correctCode: "const sessionTracker = {\n  pulseCount: 0,\n  startPulse() {\n    setInterval(() => {\n      this.pulseCount++;\n    }, 1000);\n  }\n};",
      choices: [
        "const sessionTracker = {\n  pulseCount: 0,\n  startPulse() {\n    setInterval(function() {\n      pulseCount++;\n    }, 1000);\n  }\n};",
        "const sessionTracker = {\n  pulseCount: 0,\n  startPulse() {\n    setInterval(() => {\n      this.pulseCount++;\n    }, 1000);\n  }\n};",
        "const sessionTracker = {\n  pulseCount: 0,\n  startPulse() {\n    setInterval(function() {\n      this.pulseCount++;\n    }.prototype, 1000);\n  }\n};",
        "const sessionTracker = {\n  pulseCount: 0,\n  startPulse: () => {\n    setInterval(function() {\n      this.pulseCount++;\n    }, 1000);\n  }\n};"
      ]
    },
    {
      id: 6,
      language: "python",
      title: "Scope Modification Exception Cascade",
      anomalyDescription: "Modifying dynamic reference boundaries while iterating array positions breaks sequence indexing engines.",
      buggyCode: "def clear_unverified_nodes(node_list):\n    for node in node_list:\n        if not node['verified']:\n            node_list.remove(node)\n    return node_list",
      correctCode: "def clear_unverified_nodes(node_list):\n    return [node for node in node_list if node['verified']]",
      choices: [
        "def clear_unverified_nodes(node_list):\n    for i in range(len(node_list)):\n        if not node_list[i]['verified']:\n            del node_list[i]\n    return node_list",
        "def clear_unverified_nodes(node_list):\n    return [node for node in node_list if node['verified']]",
        "def clear_unverified_nodes(node_list):\n    for node in list(node_list):\n        if node['verified'] == False:\n            node_list.pop(node)\n    return node_list",
        "def clear_unverified_nodes(node_list):\n    return node_list.clear(lambda n: n['verified'])"
      ]
    },
    {
      id: 7,
      language: "javascript",
      title: "Evaluation Identity Multiplier Deficit",
      anomalyDescription: "Soft type coercion checks allow structural noise bypass triggers across core identity comparison blocks.",
      buggyCode: "function verifySystemClearance(authTier) {\n  if (authTier == false) {\n    return 'Access Denied';\n  }\n  return 'Access Approved';\n}",
      correctCode: "function verifySystemClearance(authTier) {\n  if (authTier === false) {\n    return 'Access Denied';\n  }\n  return 'Access Approved';\n}",
      choices: [
        "function verifySystemClearance(authTier) {\n  if (authTier === false) {\n    return 'Access Denied';\n  }\n  return 'Access Approved';\n}",
        "function verifySystemClearance(authTier) {\n  if (authTier = false) {\n    return 'Access Denied';\n  }\n  return 'Access Approved';\n}",
        "function verifySystemClearance(authTier) {\n  if (!authTier == false) {\n    return 'Access Denied';\n  }\n  return 'Access Approved';\n}",
        "function verifySystemClearance(authTier) {\n  if (Object.is(authTier, 'false')) {\n    return 'Access Denied';\n  }\n  return 'Access Approved';\n}"
      ]
    }
  ];