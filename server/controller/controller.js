const Synapse = require('synapsenode');
const Client = Synapse.Client;

const client = new Client({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  fingerprint: process.env.FINGERPRINT,
  ip_address: '127.0.0.1',
  isProduction: false
});

const createUser = (req, res) => {
  const email = req.body.email;
  const phone_numbers = req.body.phone_numbers;
  const legal_names = req.body.legal_names;

  client
    .createUser(
      {
        logins: [
          {
            email: email
          }
        ],
        phone_numbers: [phone_numbers],
        legal_names: [legal_names],
      }
    )
    .then(response => {
      res.send(response);
    })
    .catch(error => res.status(500).end());
};

const createOauth = (req, res) => {
  const user_id = req.params.user_id; 

  client
    .getUser(user_id)
    .then(user => {
      user
        .createNode(
          {
            type: 'IB-DEPOSIT-US',
            info: {
              nickname: 'oauth',
            }
          }
        )
        .then(response => {
          res.send(response.data);
        })
        .catch(error => res.status(500).end());
    });
};

const createIBAccount = (req, res) => {
  const user_id = req.params.user_id; 
  const nickname = req.body.nickname;

  client
    .getUser(user_id)
    .then(user => {
      user
        .createNode(
          {
            type: 'IB-DEPOSIT-US',
            info: {
              nickname: nickname,
            }
          }
        )
        .then(response => {
          res.send(response.data);
        })
        .catch(error => res.status(500).end());
    });
};

const addFund = (req, res) => {
  const user_id = req.params.user_id;
  const amount = req.body.amount;
  const node_id = req.body.node_id;

  client
    .getUser(user_id)
    .then(user => {
      user
        .createTransaction( 
          node_id, {
            to: {
              type: 'IB-DEPOSIT-US',
              id: node_id,
            },
            amount: {
              amount: amount,
              currency: 'USD'
            },
            extra: {
              ip: '127.0.0.1',
              note: 'Test transaction'
            }
          })
          .then(response => {
            res.send(response.data);

          })
          .catch(error => res.status(500).end());
    });
};


module.exports = { createUser, 
                   createOauth, 
                   createIBAccount, 
                   addFund
                 };