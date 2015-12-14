var regions = [
    {id:"E320DAA5-BBE0-42F9-9004-1C0F41C08750",name:"Mid Atlantic",vp_user_account_id:"47744363-90F8-4E07-A67C-086DEDE73B4A",region_number:11,division_id:"EC48E68F-6E26-4A62-99EF-012EE8E36AF3"},
    {id:"9223FEAF-0363-42BF-9254-1F0413CF2339",name:"New England",vp_user_account_id:"5CE31DB5-3E03-4BED-8881-FE3792F72D3E",region_number:1,division_id:"EC48E68F-6E26-4A62-99EF-012EE8E36AF3"},
    {id:"C729AEF2-4EC1-4944-B5E7-2442FFE58B39",name:"North Atlantic",vp_user_account_id:"9EE97BED-7B99-4F76-9191-988AA6C7CEF6",region_number:15,division_id:"EC48E68F-6E26-4A62-99EF-012EE8E36AF3"},
    {id:"01110BE1-3C80-422C-BDFA-3E1079E7DE68",name:"Diversified",vp_user_account_id:"92A88F74-BFA8-4C74-8162-F485621D7044",region_number:22,division_id:"6C6E8699-D54F-4B08-AE34-83C75CB95181"},
    {id:"53118519-6F55-4774-A5D2-46CB49F35D23",name:"North West",vp_user_account_id:"37B484C3-80A6-40EF-9D5D-84AFB97291CD",region_number:2,division_id:"968AD1E9-78E7-47F1-8899-51ECCA76AB70"},
    {id:"ED587EDC-CF12-49E7-AE75-49499A1E80A7",name:"Florida",vp_user_account_id:"B067182D-1D43-455C-8F80-94499F7DB781",region_number:3,division_id:"EC48E68F-6E26-4A62-99EF-012EE8E36AF3"},
    {id:"F4027BD8-D016-4EDC-A128-4F7FBB981408",name:"GO Auction",vp_user_account_id:"DEA48733-925B-4330-8165-0330AF4A3D3C",region_number:23,division_id:"E18DFBB8-5E72-4081-A928-1F79CA69D4D7"},
    {id:"3DC449CF-1260-45B7-A1ED-4F844279A0E9",name:"HQ",vp_user_account_id:"94C35E0D-668B-4C9F-AE67-5B74BB24F65C",region_number:4,division_id:"E18DFBB8-5E72-4081-A928-1F79CA69D4D7"},
    {id:"2CF1A417-A6AF-4E03-8C57-5598F07A36C7",name:"South Texas",vp_user_account_id:"E6AADB18-BA20-4C67-9AF9-C3C622E5CE86",region_number:19,division_id:"968AD1E9-78E7-47F1-8899-51ECCA76AB70"},
    {id:"A66D330A-221D-4342-89E6-57130C3BB543",name:"Northern California",vp_user_account_id:"76A25CDB-6455-4E33-BEC4-A5AA288110F3",region_number:5,division_id:"968AD1E9-78E7-47F1-8899-51ECCA76AB70"},
    {id:"A153DF4E-7354-42D4-8D2B-5DCF812E16E8",name:"Southern California",vp_user_account_id:"1DB9453F-FFE8-47A9-BE0E-CE1A45F37026",region_number:21,division_id:"968AD1E9-78E7-47F1-8899-51ECCA76AB70"},
    {id:"FEE929C6-5A69-4242-8DD7-5E9C27F653A4",name:"South West",vp_user_account_id:"37E5C3DD-D0AB-4F65-AE46-89D4B83A517E",region_number:12,division_id:"968AD1E9-78E7-47F1-8899-51ECCA76AB70"},
    {id:"43A2FBB7-3D21-4A45-8EC1-614A3B4EE8E2",name:"South Atlantic",vp_user_account_id:"A754B585-55FF-47BD-A5CC-CE9A16B88A39",region_number:13,division_id:"EC48E68F-6E26-4A62-99EF-012EE8E36AF3"},
    {id:"01F41992-B86E-4B43-A1D1-61684DF05310",name:"Franchise West",vp_user_account_id:"1BE22D1D-04A2-4119-8581-767BE6B662E1",region_number:28,division_id:"FED7D5B9-414D-4F59-9F42-C3CC44459C31"},
    {id:"CAD9588E-6D78-4F13-9B3F-61E1D6164FB8",name:"Mid West",vp_user_account_id:"C9AB13A1-60E7-480C-B315-9B434B619CD5",region_number:6,division_id:"968AD1E9-78E7-47F1-8899-51ECCA76AB70"},
    {id:"27901959-D77A-4532-A3B1-C0911DDF6D0E",name:"North Central",vp_user_account_id:"12C6D40B-1311-4ABF-9E3F-C5436916895F",region_number:8,division_id:"EC48E68F-6E26-4A62-99EF-012EE8E36AF3"},
    {id:"CB406F0B-159F-4F15-A496-D0F431210C42",name:"South Central",vp_user_account_id:"DBDE06F5-418A-4913-B099-33FDA3AA17E4",region_number:9,division_id:"EC48E68F-6E26-4A62-99EF-012EE8E36AF3"},
    {id:"8C8FE1DC-FB9C-403B-B026-D4D28F1CAA14",name:"Corporate Canada",vp_user_account_id:"DB049079-5E7A-4FC5-AFA8-A65467A0A3F9",region_number:27,division_id:"7420666D-ECEB-4F96-A902-D78479AE01B9"},
    {id:"59756F75-C015-4BAD-B406-D894F08A4D74",name:"North Texas",vp_user_account_id:"2864CCDB-53F0-4D99-8B82-8A053F056C66",region_number:18,division_id:"968AD1E9-78E7-47F1-8899-51ECCA76AB70"},
    {id:"613CB06E-B2E0-4AE3-81F0-D9046FC51A75",name:"Great Plains",vp_user_account_id:"4AE09AC3-83A7-4EDA-85D5-D70FA18E79E6",region_number:20,division_id:"968AD1E9-78E7-47F1-8899-51ECCA76AB70"},
    {id:"F015139F-B124-42CC-B446-E2680D6E59F5",name:"Franchise East",vp_user_account_id:"7D9E4183-9257-46DA-88F2-EBACA85635DF",region_number:24,division_id:"FED7D5B9-414D-4F59-9F42-C3CC44459C31"},
    {id:"903BDAE5-2707-4B30-9245-E5DE9671C375",name:"Eastern Canada",vp_user_account_id:"4E42EDA5-8431-4DD2-872A-C548FF3A1428",region_number:25,division_id:"7420666D-ECEB-4F96-A902-D78479AE01B9"},
    {id:"789BCD91-8D69-493C-B592-F5D7B05D5C5B",name:"Pennsylvania/New York",vp_user_account_id:"7FDDF575-36C4-40A6-B1A6-1BFEFD4E41D7",region_number:14,division_id:"EC48E68F-6E26-4A62-99EF-012EE8E36AF3"},
    {id:"1DD6A1DC-D87E-4A3E-B8C0-F6996C104DE8",name:"Corporate",vp_user_account_id:"6A001AD2-7D67-4E22-88AB-D3ED180BCDB3",region_number:10,division_id:"E18DFBB8-5E72-4081-A928-1F79CA69D4D7"},
    {id:"13EDC53F-3E7D-4915-9017-FD7A9E75296B",name:"Western Canada",vp_user_account_id:"CA62357C-C7BB-414C-90D6-34F330B712EE",region_number:26,division_id:"7420666D-ECEB-4F96-A902-D78479AE01B9"}
];

var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
    listenables: [Actions],
    triggerChange: function() {
        this.trigger('change', regions);
    },
    getRegions: function() {
        this.triggerChange();
    }
});