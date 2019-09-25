export default {
  data: [
    {
      importing: false,
      organizationalUnits: [
        {
          id: 'c45d1beb5489a642137323f6ee38bfb8',
          companyId: '0fc7a174551ba976834c4cd997b49afb',
          name: 'local',
          distinguishedName: 'DC=local',
          identityUrl: 'c45d1beb5489a642137323f6ee38bfb8',
          ancestors: [],
          deleted: false,
          userFilterEnabled: false,
          hasChild: true
        }
      ]
    },

    {
      importing: false,
      organizationalUnits: [
        {
          id: 'd4fbf493d0f9775ea6d775784025f3b3',
          companyId: '0fc7a174551ba976834c4cd997b49afb',
          parent: 'c45d1beb5489a642137323f6ee38bfb8',
          name: 'coreviewlab',
          distinguishedName: 'DC=coreviewlab,DC=local',
          identityUrl: 'd4fbf493d0f9775ea6d775784025f3b3',
          ancestors: ['c45d1beb5489a642137323f6ee38bfb8'],
          deleted: false,
          userFilterEnabled: true,
          hasChild: true
        }
      ]
    },

    {
      importing: false,
      organizationalUnits: [
        {
          id: '04d496f9-be94-4372-9126-a3402a794187',
          companyId: '0fc7a174551ba976834c4cd997b49afb',
          parent: 'd4fbf493d0f9775ea6d775784025f3b3',
          name: 'TestOUCP',
          distinguishedName: 'OU=TestOUCP,DC=coreviewlab,DC=local',
          identityUrl: 'c9dafce7f4afc093cb7d0d67921d9d46',
          ancestors: ['c45d1beb5489a642137323f6ee38bfb8', 'd4fbf493d0f9775ea6d775784025f3b3'],
          deleted: false,
          userFilterEnabled: true,
          hasChild: true
        },
        {
          id: '39c10c5d-a616-444b-8c74-38d70f23e43f',
          companyId: '0fc7a174551ba976834c4cd997b49afb',
          parent: 'd4fbf493d0f9775ea6d775784025f3b3',
          name: 'Domain Controllers',
          distinguishedName: 'OU=Domain Controllers,DC=coreviewlab,DC=local',
          identityUrl: 'dd51a712dd224780009875ec600d4572',
          ancestors: ['c45d1beb5489a642137323f6ee38bfb8', 'd4fbf493d0f9775ea6d775784025f3b3'],
          deleted: false,
          userFilterEnabled: false,
          hasChild: false
        },
        {
          id: '401c41b6-41c5-4565-a14b-8049a916a310',
          companyId: '0fc7a174551ba976834c4cd997b49afb',
          parent: 'd4fbf493d0f9775ea6d775784025f3b3',
          name: 'Microsoft Exchange Security Groups',
          distinguishedName: 'OU=Microsoft Exchange Security Groups,DC=coreviewlab,DC=local',
          identityUrl: '8cda4331006cc4856c1a9ca99c1f27cc',
          ancestors: ['c45d1beb5489a642137323f6ee38bfb8', 'd4fbf493d0f9775ea6d775784025f3b3'],
          deleted: false,
          userFilterEnabled: false,
          hasChild: false
        },
        {
          id: '49439a25-7466-44bc-8ed1-ca7ddd0c1193',
          companyId: '0fc7a174551ba976834c4cd997b49afb',
          parent: 'd4fbf493d0f9775ea6d775784025f3b3',
          name: 'Italia2',
          distinguishedName: 'OU=Italia2,DC=coreviewlab,DC=local',
          identityUrl: '1d4abfac17fad94d83b13bce5763a542',
          ancestors: ['c45d1beb5489a642137323f6ee38bfb8', 'd4fbf493d0f9775ea6d775784025f3b3'],
          deleted: false,
          userFilterEnabled: true,
          hasChild: true
        },
        {
          id: '82e15350-771d-4429-8db8-049af4eab9e2',
          companyId: '0fc7a174551ba976834c4cd997b49afb',
          parent: 'd4fbf493d0f9775ea6d775784025f3b3',
          name: 'LAB_USERS',
          distinguishedName: 'OU=LAB_USERS,DC=coreviewlab,DC=local',
          identityUrl: '38541562bfc3b1c62921eb8dc7e75889',
          ancestors: ['c45d1beb5489a642137323f6ee38bfb8', 'd4fbf493d0f9775ea6d775784025f3b3'],
          deleted: false,
          userFilterEnabled: true,
          hasChild: false
        },
        {
          id: 'f419ff53-09db-4697-8430-a555a12506da',
          companyId: '0fc7a174551ba976834c4cd997b49afb',
          parent: 'd4fbf493d0f9775ea6d775784025f3b3',
          name: 'MTV',
          distinguishedName: 'OU=MTV,DC=coreviewlab,DC=local',
          identityUrl: 'cb2eb48bcdd9df47ac53e76ce084f701',
          ancestors: ['c45d1beb5489a642137323f6ee38bfb8', 'd4fbf493d0f9775ea6d775784025f3b3'],
          deleted: false,
          userFilterEnabled: true,
          hasChild: false
        }
      ]
    },

    {
      importing: false,
      organizationalUnits: [
        {
          id: '04e0d184-376f-4a8f-9e5f-b7dfb347aea2',
          companyId: '0fc7a174551ba976834c4cd997b49afb',
          parent: '04d496f9-be94-4372-9126-a3402a794187',
          name: 'b4',
          distinguishedName: 'OU=b4,OU=TestOUCP,DC=coreviewlab,DC=local',
          identityUrl: '5a900063cff12dc1e6720b3591b7e6f3',
          ancestors: [
            'c45d1beb5489a642137323f6ee38bfb8',
            'd4fbf493d0f9775ea6d775784025f3b3',
            '04d496f9-be94-4372-9126-a3402a794187'
          ],
          deleted: false,
          userFilterEnabled: true,
          hasChild: false
        },
        {
          id: '1564c335-8afd-4069-97e0-1370dc518daf',
          companyId: '0fc7a174551ba976834c4cd997b49afb',
          parent: '04d496f9-be94-4372-9126-a3402a794187',
          name: 'b5',
          distinguishedName: 'OU=b5,OU=TestOUCP,DC=coreviewlab,DC=local',
          identityUrl: '24de1c019e0fb299f912a160160886db',
          ancestors: [
            'c45d1beb5489a642137323f6ee38bfb8',
            'd4fbf493d0f9775ea6d775784025f3b3',
            '04d496f9-be94-4372-9126-a3402a794187'
          ],
          deleted: false,
          userFilterEnabled: false,
          hasChild: false
        },
        {
          id: '40223687-85f8-4aa1-a537-73a13328026d',
          companyId: '0fc7a174551ba976834c4cd997b49afb',
          parent: '04d496f9-be94-4372-9126-a3402a794187',
          name: 'c2-z',
          distinguishedName: 'OU=c2-z,OU=TestOUCP,DC=coreviewlab,DC=local',
          identityUrl: '055e7999260b51e4beea8b00d60952f3',
          ancestors: [
            'c45d1beb5489a642137323f6ee38bfb8',
            'd4fbf493d0f9775ea6d775784025f3b3',
            '04d496f9-be94-4372-9126-a3402a794187'
          ],
          deleted: true,
          userFilterEnabled: true,
          hasChild: false
        },
        {
          id: '40b4dfdc-3117-4277-966d-9be118acc6ca',
          companyId: '0fc7a174551ba976834c4cd997b49afb',
          parent: '04d496f9-be94-4372-9126-a3402a794187',
          name: 'b2',
          distinguishedName: 'OU=b2,OU=TestOUCP,DC=coreviewlab,DC=local',
          identityUrl: 'f0ad2efc44318316b4fe07f131a7522e',
          ancestors: [
            'c45d1beb5489a642137323f6ee38bfb8',
            'd4fbf493d0f9775ea6d775784025f3b3',
            '04d496f9-be94-4372-9126-a3402a794187'
          ],
          deleted: false,
          userFilterEnabled: true,
          hasChild: false
        },
        {
          id: '4f77f143-5e39-4be9-8a57-e41e93659a6a',
          companyId: '0fc7a174551ba976834c4cd997b49afb',
          parent: '04d496f9-be94-4372-9126-a3402a794187',
          name: 'b10',
          distinguishedName: 'OU=b10,OU=TestOUCP,DC=coreviewlab,DC=local',
          identityUrl: 'acc6b7315cea75a7f2af5cdd2f343fd7',
          ancestors: [
            'c45d1beb5489a642137323f6ee38bfb8',
            'd4fbf493d0f9775ea6d775784025f3b3',
            '04d496f9-be94-4372-9126-a3402a794187'
          ],
          deleted: false,
          userFilterEnabled: false,
          hasChild: false
        },
        {
          id: '526bafc6-593d-4554-8f63-f5bce43fbfcb',
          companyId: '0fc7a174551ba976834c4cd997b49afb',
          parent: '04d496f9-be94-4372-9126-a3402a794187',
          name: 'b8-b',
          distinguishedName: 'OU=b8-b,OU=TestOUCP,DC=coreviewlab,DC=local',
          identityUrl: '61c0f71f2207e7a0329b0b506b7be7d9',
          ancestors: [
            'c45d1beb5489a642137323f6ee38bfb8',
            'd4fbf493d0f9775ea6d775784025f3b3',
            '04d496f9-be94-4372-9126-a3402a794187'
          ],
          deleted: false,
          userFilterEnabled: false,
          hasChild: false
        },
        {
          id: 'abebc6e8-6955-4f5c-95cd-b9b39d95b552',
          companyId: '0fc7a174551ba976834c4cd997b49afb',
          parent: '04d496f9-be94-4372-9126-a3402a794187',
          name: 'b3-c',
          distinguishedName: 'OU=b3-c,OU=TestOUCP,DC=coreviewlab,DC=local',
          identityUrl: '330369b7e26e466c0e549020740ae110',
          ancestors: [
            'c45d1beb5489a642137323f6ee38bfb8',
            'd4fbf493d0f9775ea6d775784025f3b3',
            '04d496f9-be94-4372-9126-a3402a794187'
          ],
          deleted: false,
          userFilterEnabled: false,
          hasChild: true
        },
        {
          id: 'ba5dc343-0546-4004-a00f-8af9ecc09903',
          companyId: '0fc7a174551ba976834c4cd997b49afb',
          parent: '04d496f9-be94-4372-9126-a3402a794187',
          name: 'b7-bitonto',
          distinguishedName: 'OU=b7-bitonto,OU=TestOUCP,DC=coreviewlab,DC=local',
          identityUrl: '242e6a186769a74aeeb6b32c48f2adaa',
          ancestors: [
            'c45d1beb5489a642137323f6ee38bfb8',
            'd4fbf493d0f9775ea6d775784025f3b3',
            '04d496f9-be94-4372-9126-a3402a794187'
          ],
          deleted: false,
          userFilterEnabled: false,
          hasChild: true
        },
        {
          id: 'bb5e4223-1cda-4802-9464-3b6bbb365781',
          companyId: '0fc7a174551ba976834c4cd997b49afb',
          parent: '04d496f9-be94-4372-9126-a3402a794187',
          name: 'b11',
          distinguishedName: 'OU=b11,OU=TestOUCP,DC=coreviewlab,DC=local',
          identityUrl: '66e0c5f4023c858918b4e466aaf2af0a',
          ancestors: [
            'c45d1beb5489a642137323f6ee38bfb8',
            'd4fbf493d0f9775ea6d775784025f3b3',
            '04d496f9-be94-4372-9126-a3402a794187'
          ],
          deleted: true,
          userFilterEnabled: false,
          hasChild: true
        },
        {
          id: 'cd2ee32a-0d67-4e32-b138-18ddf780c15f',
          companyId: '0fc7a174551ba976834c4cd997b49afb',
          parent: '04d496f9-be94-4372-9126-a3402a794187',
          name: 'b12',
          distinguishedName: 'OU=b12,OU=TestOUCP,DC=coreviewlab,DC=local',
          identityUrl: '1d68cf535320982faf10b280c19e69a3',
          ancestors: [
            'c45d1beb5489a642137323f6ee38bfb8',
            'd4fbf493d0f9775ea6d775784025f3b3',
            '04d496f9-be94-4372-9126-a3402a794187'
          ],
          deleted: false,
          userFilterEnabled: false,
          hasChild: true
        },
        {
          id: 'd5900aea-61c4-428a-b8b9-7bc7af4a5553',
          companyId: '0fc7a174551ba976834c4cd997b49afb',
          parent: '04d496f9-be94-4372-9126-a3402a794187',
          name: 'b9',
          distinguishedName: 'OU=b9,OU=TestOUCP,DC=coreviewlab,DC=local',
          identityUrl: 'dc188cff650409ec711f01a3e58e6916',
          ancestors: [
            'c45d1beb5489a642137323f6ee38bfb8',
            'd4fbf493d0f9775ea6d775784025f3b3',
            '04d496f9-be94-4372-9126-a3402a794187'
          ],
          deleted: false,
          userFilterEnabled: false,
          hasChild: true
        }
      ]
    }
  ]
}
