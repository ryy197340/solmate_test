export type SolmatePresale = {
  "version": "0.1.0",
  "name": "solmate_presale",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "startDate",
          "type": "u64"
        },
        {
          "name": "endDate",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateSetting",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "newAuthority",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "CHECKED: new authority account"
          ]
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "startDate",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "endDate",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "activated",
          "type": {
            "option": "bool"
          }
        }
      ]
    },
    {
      "name": "buy",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "saleState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenAmount",
          "type": "u64"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "globalState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "startDate",
            "type": "u64"
          },
          {
            "name": "endDate",
            "type": "u64"
          },
          {
            "name": "activated",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "saleState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "PresaleMint",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "decimals",
            "type": "u64"
          },
          {
            "name": "price",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "Unauthorized",
      "msg": "You are not authorized to perform this action."
    },
    {
      "code": 6001,
      "name": "AlreadyInUse",
      "msg": "AlreadyInUse"
    },
    {
      "code": 6002,
      "name": "InvalidProgramAddress",
      "msg": "InvalidProgramAddress"
    },
    {
      "code": 6003,
      "name": "InvalidState",
      "msg": "InvalidState"
    },
    {
      "code": 6004,
      "name": "InvalidOwner",
      "msg": "InvalidOwner"
    },
    {
      "code": 6005,
      "name": "NotAllowed",
      "msg": "NotAllowed"
    },
    {
      "code": 6006,
      "name": "MathOverflow",
      "msg": "Math operation overflow"
    },
    {
      "code": 6007,
      "name": "InvalidAccountInput",
      "msg": "InvalidAccountInput"
    },
    {
      "code": 6008,
      "name": "InvalidPubkey",
      "msg": "InvalidPubkey"
    },
    {
      "code": 6009,
      "name": "InvalidAmount",
      "msg": "InvalidAmount"
    },
    {
      "code": 6010,
      "name": "InvalidSupply",
      "msg": "InvalidSupply"
    },
    {
      "code": 6011,
      "name": "Insufficient",
      "msg": "Insufficient"
    },
    {
      "code": 6012,
      "name": "Uninitialized",
      "msg": "Uninitialized"
    }
  ]
};

export const IDL: SolmatePresale = {
  "version": "0.1.0",
  "name": "solmate_presale",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "startDate",
          "type": "u64"
        },
        {
          "name": "endDate",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateSetting",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "newAuthority",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "CHECKED: new authority account"
          ]
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "startDate",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "endDate",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "activated",
          "type": {
            "option": "bool"
          }
        }
      ]
    },
    {
      "name": "buy",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "saleState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenAmount",
          "type": "u64"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "globalState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "startDate",
            "type": "u64"
          },
          {
            "name": "endDate",
            "type": "u64"
          },
          {
            "name": "activated",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "saleState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "PresaleMint",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "decimals",
            "type": "u64"
          },
          {
            "name": "price",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "Unauthorized",
      "msg": "You are not authorized to perform this action."
    },
    {
      "code": 6001,
      "name": "AlreadyInUse",
      "msg": "AlreadyInUse"
    },
    {
      "code": 6002,
      "name": "InvalidProgramAddress",
      "msg": "InvalidProgramAddress"
    },
    {
      "code": 6003,
      "name": "InvalidState",
      "msg": "InvalidState"
    },
    {
      "code": 6004,
      "name": "InvalidOwner",
      "msg": "InvalidOwner"
    },
    {
      "code": 6005,
      "name": "NotAllowed",
      "msg": "NotAllowed"
    },
    {
      "code": 6006,
      "name": "MathOverflow",
      "msg": "Math operation overflow"
    },
    {
      "code": 6007,
      "name": "InvalidAccountInput",
      "msg": "InvalidAccountInput"
    },
    {
      "code": 6008,
      "name": "InvalidPubkey",
      "msg": "InvalidPubkey"
    },
    {
      "code": 6009,
      "name": "InvalidAmount",
      "msg": "InvalidAmount"
    },
    {
      "code": 6010,
      "name": "InvalidSupply",
      "msg": "InvalidSupply"
    },
    {
      "code": 6011,
      "name": "Insufficient",
      "msg": "Insufficient"
    },
    {
      "code": 6012,
      "name": "Uninitialized",
      "msg": "Uninitialized"
    }
  ]
};
