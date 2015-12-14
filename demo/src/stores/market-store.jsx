var markets = [
    {id:"1B3E17CE-7949-4363-8EDF-00221DD99DE5", name:"Albuquerque",  region_id:"FEE929C6-5A69-4242-8DD7-5E9C27F653A4"},
    {id:"3E2AEB59-14E9-4FE9-9104-009C5E1DAFBC", name:"San Jose",  region_id:"A66D330A-221D-4342-89E6-57130C3BB543"},
    {id:"3B38DF29-BDBF-43CA-8C9E-012FB7F227DC", name:"Newark South",  region_id:"9223FEAF-0363-42BF-9254-1F0413CF2339"},
    {id:"CA0B7989-6036-4E9E-8D02-0255D383F999", name:"Fresno",  region_id:"A66D330A-221D-4342-89E6-57130C3BB543"},
    {id:"98124775-77D8-462B-8466-02ADBC36BD37", name:"Gary",  region_id:"CAD9588E-6D78-4F13-9B3F-61E1D6164FB8"},
    {id:"DEC12789-258C-4A3C-892B-0320E0C71CE8", name:"Pittsburgh Metro",  region_id:"C729AEF2-4EC1-4944-B5E7-2442FFE58B39"},
    {id:"9993CA1A-21AF-4F56-A34E-032E36BD71AA", name:"San Francisco Metro",  region_id:"A66D330A-221D-4342-89E6-57130C3BB543"},
    {id:"4474C455-5698-402C-AB99-079E19105339", name:"Pensacola",  region_id:"CB406F0B-159F-4F15-A496-D0F431210C42"},
    {id:"D55BDCB7-C717-41DD-9E2D-086A83207FD0", name:"Ft. Wayne",  region_id:"27901959-D77A-4532-A3B1-C0911DDF6D0E"},
    {id:"8FC306CA-E6B9-4761-8E38-08AF44DC998E", name:"FMD 501",  region_id:"F015139F-B124-42CC-B446-E2680D6E59F5"},
    {id:"0640E598-4275-4FA6-9CFF-09569A613764", name:"Raleigh West",  region_id:"E320DAA5-BBE0-42F9-9004-1C0F41C08750"},
    {id:"F1B45EED-307E-4586-A8B4-0C1B54CB7F1F", name:"Chattanooga",  region_id:"43A2FBB7-3D21-4A45-8EC1-614A3B4EE8E2"},
    {id:"312B1D57-55FE-4851-8D3B-0C84C4AF37F4", name:"Springfield",  region_id:"CAD9588E-6D78-4F13-9B3F-61E1D6164FB8"},
    {id:"9939F27F-FA16-4BCE-808B-10A2075A58B6", name:"Grand Junction",  region_id:"FEE929C6-5A69-4242-8DD7-5E9C27F653A4"},
    {id:"1E7AA61A-A54B-463D-9489-10C2B091C965", name:"Boston North",  region_id:"9223FEAF-0363-42BF-9254-1F0413CF2339"},
    {id:"CD7A75A0-5DEB-4EB2-AC79-11553C983A95", name:"Fargo",  region_id:"613CB06E-B2E0-4AE3-81F0-D9046FC51A75"},
    {id:"2E711305-95B1-445A-8EB5-123FC82231FF", name:"DVF Central", number:"55", region_id:"01110BE1-3C80-422C-BDFA-3E1079E7DE68"},
    {id:"DCC3E806-F44A-408B-869C-124C53C7D8BC", name:"FMD 502",  region_id:"F015139F-B124-42CC-B446-E2680D6E59F5"},
    {id:"3B8C13F2-8649-4B46-9AE3-131E540DA6F6", name:"Miami Metro",  region_id:"ED587EDC-CF12-49E7-AE75-49499A1E80A7"},
    {id:"871B4629-3879-4E01-842E-133D41CD78F9", name:"Quebec West",  region_id:"903BDAE5-2707-4B30-9245-E5DE9671C375"},
    {id:"76CE5397-5CDF-41A4-822B-151A97F4FB2C", name:"Baltimore",  region_id:"C729AEF2-4EC1-4944-B5E7-2442FFE58B39"},
    {id:"75CED971-BD29-4C3C-A35F-15450658764A", name:"LA North",  region_id:"A153DF4E-7354-42D4-8D2B-5DCF812E16E8"},
    {id:"2C878F02-D16D-4C88-8DB7-1860DFA282B4", name:"Quebec East",  region_id:"903BDAE5-2707-4B30-9245-E5DE9671C375"},
    {id:"3BBE64E9-7005-43C5-9B65-18F989917A4F", name:"GO Phoenix",  region_id:"F4027BD8-D016-4EDC-A128-4F7FBB981408"},
    {id:"15000254-1470-4112-A5CE-1A7AB5D2057C", name:"Vancouver",  region_id:"13EDC53F-3E7D-4915-9017-FD7A9E75296B"},
    {id:"3695453F-5D8F-492F-AA6D-1AF57D7837CD", name:"GO Atlanta",  region_id:"F4027BD8-D016-4EDC-A128-4F7FBB981408"},
    {id:"D7F28204-3E52-48F6-B1D4-1B681BD1C5E0", name:"FMD 506",  region_id:"F015139F-B124-42CC-B446-E2680D6E59F5"},
    {id:"C9EAE46C-FC3A-4FE3-860E-1D6DDEA66156", name:"Oceanside",  region_id:"A153DF4E-7354-42D4-8D2B-5DCF812E16E8"},
    {id:"9F64A2D0-88A7-4961-9B74-1D7DF2E3258E", name:"Wichita",  region_id:"613CB06E-B2E0-4AE3-81F0-D9046FC51A75"},
    {id:"EEE9CA15-E19D-4334-A7C8-1EAD4D4D64E2", name:"San Antonio South",  region_id:"2CF1A417-A6AF-4E03-8C57-5598F07A36C7"},
    {id:"1767D017-E7E7-49D5-894E-1ED9B32BE07B", name:"DVF Westcoast", number:"54", region_id:"01110BE1-3C80-422C-BDFA-3E1079E7DE68"},
    {id:"6D5F8A0D-AD89-4A05-BB18-1FDA9874D803", name:"Detroit North",  region_id:"27901959-D77A-4532-A3B1-C0911DDF6D0E"},
    {id:"2B3A052D-ED6A-4785-B0A7-214E2C7CEBAE", name:"West Palm Beach",  region_id:"ED587EDC-CF12-49E7-AE75-49499A1E80A7"},
    {id:"4B7B1D68-9E9C-483B-90DF-21C54F3A0A97", name:"San Antonio North",  region_id:"2CF1A417-A6AF-4E03-8C57-5598F07A36C7"},
    {id:"00A7407B-EA96-4B0C-9FCD-224D9FF5BBFC", name:"Mobile",  region_id:"CB406F0B-159F-4F15-A496-D0F431210C42"},
    {id:"22990213-D247-4671-961A-2321A8B1ECE9", name:"Atlanta East",  region_id:"43A2FBB7-3D21-4A45-8EC1-614A3B4EE8E2"},
    {id:"F2DFB928-E1FF-432D-9859-2432D565BDEC", name:"Phoenix Metro",  region_id:"FEE929C6-5A69-4242-8DD7-5E9C27F653A4"},
    {id:"638AAD85-7232-4BC2-89DE-2598F791EF7A", name:"Houston North",  region_id:"2CF1A417-A6AF-4E03-8C57-5598F07A36C7"},
    {id:"A7F990E8-B6F4-46DB-9B28-2624BBE7F616", name:"Salt Lake City North",  region_id:"53118519-6F55-4774-A5D2-46CB49F35D23"},
    {id:"239ECCC3-1010-4C16-A65A-266013A6B7C1", name:"Birmingham Metro",  region_id:"CB406F0B-159F-4F15-A496-D0F431210C42"},
    {id:"B6422660-8A9B-45AB-AD29-269F67C3BF88", name:"Little Rock",  region_id:"CAD9588E-6D78-4F13-9B3F-61E1D6164FB8"},
    {id:"14A1ABC5-D746-4CB8-B315-273D6F6DB7DA", name:"Ocala",  region_id:"ED587EDC-CF12-49E7-AE75-49499A1E80A7"},
    {id:"366AD13E-49C5-4CAA-9732-27AD3E347CD2", name:"Southern Illinois",  region_id:"1DD6A1DC-D87E-4A3E-B8C0-F6996C104DE8"},
    {id:"D4961696-D225-4A64-982A-289F5360EAE1", name:"Spokane",  region_id:"53118519-6F55-4774-A5D2-46CB49F35D23"},
    {id:"D157619C-6E26-4AA6-87A4-2A1988862368", name:"San Diego South",  region_id:"A153DF4E-7354-42D4-8D2B-5DCF812E16E8"},
    {id:"CE627E09-92C6-4098-A21E-2A842972FDF1", name:"St. Louis Metro",  region_id:"CAD9588E-6D78-4F13-9B3F-61E1D6164FB8"},
    {id:"62F9A1AF-10E4-4389-914D-2CCBEBBE9D7B", name:"Indianapolis South",  region_id:"27901959-D77A-4532-A3B1-C0911DDF6D0E"},
    {id:"0D43F40C-8ADB-46CF-95F0-2DFF95D98603", name:"Columbia",  region_id:"43A2FBB7-3D21-4A45-8EC1-614A3B4EE8E2"},
    {id:"76100364-4EE7-435A-A842-2E0BF07D3B64", name:"Trenton North",  region_id:"9223FEAF-0363-42BF-9254-1F0413CF2339"},
    {id:"6350779E-1F33-4B02-AD71-2EE6633F6755", name:"Lexington Metro",  region_id:"27901959-D77A-4532-A3B1-C0911DDF6D0E"},
    {id:"1D458E9A-D7E3-4738-898F-2F2E0CE3B533", name:"DVF Northeast", number:"50", region_id:"01110BE1-3C80-422C-BDFA-3E1079E7DE68"},
    {id:"48E3676C-6AEB-48CD-A476-300B8081C084", name:"FMD 511",  region_id:"F015139F-B124-42CC-B446-E2680D6E59F5"},
    {id:"959C7612-8565-4F98-83C2-31BE4212014B", name:"Austin",  region_id:"2CF1A417-A6AF-4E03-8C57-5598F07A36C7"},
    {id:"4DAF67D4-2D3A-4C96-8410-35379F0C7B8A", name:"Buffalo",  region_id:"789BCD91-8D69-493C-B592-F5D7B05D5C5B"},
    {id:"8F9EA5FA-9E4C-4755-8AC4-37452150E763", name:"Milwaukee",  region_id:"613CB06E-B2E0-4AE3-81F0-D9046FC51A75"},
    {id:"442847E4-03F1-4199-8095-384239E4FD1B", name:"Nashville South",  region_id:"CB406F0B-159F-4F15-A496-D0F431210C42"},
    {id:"6D065D29-ED2A-4BA5-B06C-386A365DF3E2", name:"Las Vegas",  region_id:"A66D330A-221D-4342-89E6-57130C3BB543"},
    {id:"03AED64E-3735-4C25-BE90-3934FD7EF829", name:"Dayton North",  region_id:"27901959-D77A-4532-A3B1-C0911DDF6D0E"},
    {id:"0041221B-EA30-4DC5-AB53-3A8498F19813", name:"Raleigh South",  region_id:"E320DAA5-BBE0-42F9-9004-1C0F41C08750"},
    {id:"A1D6D642-7FEC-4EE7-9709-3ABE9C5FA22F", name:"Ontario Canada South",  region_id:"903BDAE5-2707-4B30-9245-E5DE9671C375"},
    {id:"90A19BE2-39CD-42A9-9175-3BC22707E6B7", name:"Raleigh East",  region_id:"E320DAA5-BBE0-42F9-9004-1C0F41C08750"},
    {id:"7A1E618B-0911-43B8-AF90-3D8E04E6ACDC", name:"Tatooine",  region_id:"27901959-D77A-4532-A3B1-C0911DDF6D0E"},
    {id:"5C4C184B-FE6D-4D88-B9E7-3E5B9798CF04", name:"FMD 510",  region_id:"F015139F-B124-42CC-B446-E2680D6E59F5"},
    {id:"BF7D536E-CAFC-4FCD-A908-40490B02BE0F", name:"Boise",  region_id:"53118519-6F55-4774-A5D2-46CB49F35D23"},
    {id:"9E0AD8D2-FBFA-43E5-9C3F-426753256077", name:"Houston Metro",  region_id:"2CF1A417-A6AF-4E03-8C57-5598F07A36C7"},
    {id:"AC667BAB-A6B1-4A80-B604-43758E8DAF29", name:"Denver South",  region_id:"FEE929C6-5A69-4242-8DD7-5E9C27F653A4"},
    {id:"A8999291-1D05-4D26-A7BE-45F22D639155", name:"San Francisco South",  region_id:"A66D330A-221D-4342-89E6-57130C3BB543"},
    {id:"101B7597-376E-4A3D-80FD-46925A6604D1", name:"LAP", number:"8", region_id:"3DC449CF-1260-45B7-A1ED-4F844279A0E9"},
    {id:"8A996F63-38CB-49BD-813A-46ADB4F9D86A", name:"Lakeland",  region_id:"ED587EDC-CF12-49E7-AE75-49499A1E80A7"},
    {id:"ADA89503-4844-4B77-81C7-4706DBE92D02", name:"Columbus Metro",  region_id:"C729AEF2-4EC1-4944-B5E7-2442FFE58B39"},
    {id:"9E805527-7BF4-4DB8-92BC-47E71AD1034A", name:"Colorado Springs",  region_id:"FEE929C6-5A69-4242-8DD7-5E9C27F653A4"},
    {id:"13B08CA8-CF8D-4E30-B5C4-48044B4D058B", name:"FMD 500",  region_id:"F015139F-B124-42CC-B446-E2680D6E59F5"},
    {id:"1975BBDA-183F-4D7A-834A-4B281DBE7242", name:"Toledo",  region_id:"27901959-D77A-4532-A3B1-C0911DDF6D0E"},
    {id:"21A2B606-3FBD-494C-87F1-4CA222E47F29", name:"Newark North",  region_id:"9223FEAF-0363-42BF-9254-1F0413CF2339"},
    {id:"3D641B33-7F05-4E88-A722-4D4743D557DB", name:"Portland South",  region_id:"53118519-6F55-4774-A5D2-46CB49F35D23"},
    {id:"ECF75D74-E436-46AF-BDC0-4D829E131304", name:"Fayetteville",  region_id:"1DD6A1DC-D87E-4A3E-B8C0-F6996C104DE8"},
    {id:"F9D766E4-07B8-4F6F-88A7-4DC5C23911A3", name:"Chicago Central",  region_id:"CAD9588E-6D78-4F13-9B3F-61E1D6164FB8"},
    {id:"E2F26EC7-FBFD-40B1-9086-4EB8C21497F7", name:"Kingsport",  region_id:"E320DAA5-BBE0-42F9-9004-1C0F41C08750"},
    {id:"5F40E170-781D-4FFE-8DDF-4F8153A1D6ED", name:"Augusta",  region_id:"43A2FBB7-3D21-4A45-8EC1-614A3B4EE8E2"},
    {id:"04F78E73-AEDC-4108-A777-4FF6937660F1", name:"Kansas City West",  region_id:"1DD6A1DC-D87E-4A3E-B8C0-F6996C104DE8"},
    {id:"EFC2959F-076D-489B-ABD8-507B6FBAB011", name:"Shreveport",  region_id:"59756F75-C015-4BAD-B406-D894F08A4D74"},
    {id:"4921302E-CFC0-4243-9C14-51683F91206B", name:"Portland ME",  region_id:"9223FEAF-0363-42BF-9254-1F0413CF2339"},
    {id:"554AAB04-181B-439E-B713-524D82835D24", name:"Seattle South",  region_id:"53118519-6F55-4774-A5D2-46CB49F35D23"},
    {id:"AE801D43-2A2B-4F31-B6AA-5274482C5B52", name:"FMD 505",  region_id:"01F41992-B86E-4B43-A1D1-61684DF05310"},
    {id:"18D0B639-8E5F-4706-814D-54235F953646", name:"Dallas Central",  region_id:"1DD6A1DC-D87E-4A3E-B8C0-F6996C104DE8"},
    {id:"2859083A-D304-472F-90C7-573D1AB1E3C7", name:"Huntsville",  region_id:"CB406F0B-159F-4F15-A496-D0F431210C42"},
    {id:"811BF735-E7F3-47F5-95BC-59C21A8289B4", name:"Greenville",  region_id:"E320DAA5-BBE0-42F9-9004-1C0F41C08750"},
    {id:"ECFDEFBC-AA35-4F2D-B5DB-5C1CA31C2F62", name:"Portland Metro",  region_id:"53118519-6F55-4774-A5D2-46CB49F35D23"},
    {id:"5B1A812C-F2E6-4AA5-9A47-5CDA8B8FED73", name:"Houston South",  region_id:"2CF1A417-A6AF-4E03-8C57-5598F07A36C7"},
    {id:"C2700799-7D80-48D9-BD06-5DD3272F43FE", name:"Charlotte",  region_id:"E320DAA5-BBE0-42F9-9004-1C0F41C08750"},
    {id:"3A9711DC-67FC-4237-B7C4-6117CA724483", name:"DVF Southeast", number:"51", region_id:"01110BE1-3C80-422C-BDFA-3E1079E7DE68"},
    {id:"A3E6679B-347F-4BEC-BA12-6221F3715C72", name:"Charleston SC",  region_id:"43A2FBB7-3D21-4A45-8EC1-614A3B4EE8E2"},
    {id:"B5BC5344-C78E-460D-9C5E-632D5B967F10", name:"Maritimes",  region_id:"903BDAE5-2707-4B30-9245-E5DE9671C375"},
    {id:"FA9A58F4-4116-403A-822C-647AD97D4EC7", name:"LA South",  region_id:"A153DF4E-7354-42D4-8D2B-5DCF812E16E8"},
    {id:"36850AD3-9DF0-462B-BD50-6580D354EF9D", name:"Modesto",  region_id:"A66D330A-221D-4342-89E6-57130C3BB543"},
    {id:"4D1DA227-FCEF-4BCA-9E75-66A1F9EADA31", name:"Columbus East",  region_id:"C729AEF2-4EC1-4944-B5E7-2442FFE58B39"},
    {id:"9458AEC3-87EB-4AB5-87AB-6761AC92318B", name:"Long Island",  region_id:"9223FEAF-0363-42BF-9254-1F0413CF2339"},
    {id:"A194EEB3-9211-449D-B076-67CAD37959D5", name:"Tucson",  region_id:"FEE929C6-5A69-4242-8DD7-5E9C27F653A4"},
    {id:"4F99A9D7-CC3A-4271-A558-68F93C9E3C3F", name:"Chicago South",  region_id:"CAD9588E-6D78-4F13-9B3F-61E1D6164FB8"},
    {id:"2CBB29C5-A18E-4FD0-9B6B-69BD17627370", name:"DVF Midwest", number:"52", region_id:"01110BE1-3C80-422C-BDFA-3E1079E7DE68"},
    {id:"9EAC7396-1DDD-4B7B-934E-6C744179F402", name:"McAllen",  region_id:"2CF1A417-A6AF-4E03-8C57-5598F07A36C7"},
    {id:"B3600D4D-EF40-4A8E-994B-6CD136A2F819", name:"Dallas Metro",  region_id:"59756F75-C015-4BAD-B406-D894F08A4D74"},
    {id:"BA1F5379-FD86-4C07-81FC-6D5B4F1C91E0", name:"Ft. Worth",  region_id:"59756F75-C015-4BAD-B406-D894F08A4D74"},
    {id:"611FDF32-4101-4CCE-B742-6DC35AA30FB5", name:"San Diego North",  region_id:"A153DF4E-7354-42D4-8D2B-5DCF812E16E8"},
    {id:"9A0BB32E-71A4-4BB6-A245-6EBA4F0C2231", name:"Salt Lake City South",  region_id:"53118519-6F55-4774-A5D2-46CB49F35D23"},
    {id:"04008922-022F-4A8B-8080-6F86BB1028D7", name:"Plano",  region_id:"59756F75-C015-4BAD-B406-D894F08A4D74"},
    {id:"6354F75B-BCC3-4151-9B1B-70DF1C33E9BB", name:"Tulsa",  region_id:"59756F75-C015-4BAD-B406-D894F08A4D74"},
    {id:"254F2362-885A-4F6D-8D3E-729F49A0A2D9", name:"Winnipeg",  region_id:"13EDC53F-3E7D-4915-9017-FD7A9E75296B"},
    {id:"0CB22E7E-F7B0-423C-9EFB-762104B9FB5D", name:"FMD 503",  region_id:"01F41992-B86E-4B43-A1D1-61684DF05310"},
    {id:"05C67CC4-9BC4-41B2-A920-795A8C0C81DA", name:"Charleston WV",  region_id:"C729AEF2-4EC1-4944-B5E7-2442FFE58B39"},
    {id:"C2DC3AC2-99B8-4825-9362-798F889C2F09", name:"Cleveland South",  region_id:"789BCD91-8D69-493C-B592-F5D7B05D5C5B"},
    {id:"27436E90-E867-4023-8CF2-7BA7B79F741E", name:"Lexington East",  region_id:"C729AEF2-4EC1-4944-B5E7-2442FFE58B39"},
    {id:"22ECFA07-8FA0-405F-BF4D-7BA7EF356BBA", name:"Omaha",  region_id:"613CB06E-B2E0-4AE3-81F0-D9046FC51A75"},
    {id:"8C3D3CF7-7C8D-4711-A63C-7E9F453AB04B", name:"Dayton South",  region_id:"27901959-D77A-4532-A3B1-C0911DDF6D0E"},
    {id:"D8D5C1CC-D3F6-417B-A7A3-7FC4422E123B", name:"Miami North",  region_id:"ED587EDC-CF12-49E7-AE75-49499A1E80A7"},
    {id:"02EFC668-BDC3-44AD-AFB8-80D6486D9AA3", name:"Seattle North",  region_id:"53118519-6F55-4774-A5D2-46CB49F35D23"},
    {id:"88CC8C9A-CC96-4E90-B4CE-81D6F7280A14", name:"Jacksonville",  region_id:"43A2FBB7-3D21-4A45-8EC1-614A3B4EE8E2"},
    {id:"99FAFDDF-C144-4FE3-9CA1-82B81C9D0032", name:"Flint",  region_id:"27901959-D77A-4532-A3B1-C0911DDF6D0E"},
    {id:"C537598E-C0B4-417D-A0A4-82CDA5652F17", name:"FMD 509",  region_id:"01F41992-B86E-4B43-A1D1-61684DF05310"},
    {id:"E1488FD4-3773-4EAE-B7C7-84CC88C43425", name:"Minneapolis West",  region_id:"613CB06E-B2E0-4AE3-81F0-D9046FC51A75"},
    {id:"F618FC4C-755A-4FA0-9BB4-882B08E820B1", name:"Dallas North",  region_id:"59756F75-C015-4BAD-B406-D894F08A4D74"},
    {id:"B76BB5F6-E857-4CC6-BB2E-88611F904B88", name:"Providence",  region_id:"9223FEAF-0363-42BF-9254-1F0413CF2339"},
    {id:"C29CF67E-E13F-4277-8D79-8B33FF74383B", name:"Winston Salem",  region_id:"E320DAA5-BBE0-42F9-9004-1C0F41C08750"},
    {id:"570E4674-B988-4CD5-AD72-8F9B656A1EC7", name:"LTF", number:"7", region_id:"3DC449CF-1260-45B7-A1ED-4F844279A0E9"},
    {id:"3A238BAD-C55A-491B-824E-90E7FE2254FA", name:"Amarillo",  region_id:"59756F75-C015-4BAD-B406-D894F08A4D74"},
    {id:"1F18F9C1-F49C-42A5-B40E-928282B5894E", name:"Edmonton",  region_id:"13EDC53F-3E7D-4915-9017-FD7A9E75296B"},
    {id:"98EA9B17-365B-4459-9D59-92A9D90C4F1C", name:"Cedar Rapids",  region_id:"1DD6A1DC-D87E-4A3E-B8C0-F6996C104DE8"},
    {id:"EC48414D-CA7E-4604-8F79-92D755F69F9C", name:"Evansville",  region_id:"CAD9588E-6D78-4F13-9B3F-61E1D6164FB8"},
    {id:"2F6A1567-4FE0-40C6-9FE0-9366957D9FC7", name:"Erie",  region_id:"789BCD91-8D69-493C-B592-F5D7B05D5C5B"},
    {id:"3E84826E-A1A2-4C3C-AC7F-937AAA03A653", name:"Ontario Canada West",  region_id:"903BDAE5-2707-4B30-9245-E5DE9671C375"},
    {id:"9035EA45-DE13-4A7E-B0E1-976D9ED61958", name:"Birmingham North",  region_id:"CB406F0B-159F-4F15-A496-D0F431210C42"},
    {id:"43E15F87-566C-4D53-ABD0-97E9698F45AB", name:"Anaheim",  region_id:"A153DF4E-7354-42D4-8D2B-5DCF812E16E8"},
    {id:"1676BC57-04DF-4E20-B079-9ABCC5A580ED", name:"Syracuse",  region_id:"789BCD91-8D69-493C-B592-F5D7B05D5C5B"},
    {id:"186A7CC4-4A7E-40BC-BF66-9AD8A07C7785", name:"Redding",  region_id:"A66D330A-221D-4342-89E6-57130C3BB543"},
    {id:"D110D4CC-F544-451D-83DE-9BE988C594BB", name:"Jackson East",  region_id:"CB406F0B-159F-4F15-A496-D0F431210C42"},
    {id:"39618180-397B-44DB-B91D-9BFD16A41EC0", name:"Corporate", number:"0", region_id:"1DD6A1DC-D87E-4A3E-B8C0-F6996C104DE8"},
    {id:"E1A9FFC5-9113-4B43-87C3-9D9120D64394", name:"Riverside",  region_id:"A153DF4E-7354-42D4-8D2B-5DCF812E16E8"},
    {id:"F4C35A41-48C0-480E-A657-9EFE9EC698E0", name:"Albany North",  region_id:"789BCD91-8D69-493C-B592-F5D7B05D5C5B"},
    {id:"F4F23811-AC44-4F56-BF58-A0C0765CBFF2", name:"Houston East",  region_id:"2CF1A417-A6AF-4E03-8C57-5598F07A36C7"},
    {id:"A0F97FB7-CAFF-4226-9285-A0C67975AD7A", name:"FMD 504",  region_id:"01F41992-B86E-4B43-A1D1-61684DF05310"},
    {id:"C4394ADD-00BE-4BFD-9AA9-A19351116FBE", name:"Albany Metro",  region_id:"789BCD91-8D69-493C-B592-F5D7B05D5C5B"},
    {id:"15B32F27-1AB8-499F-AF95-A1B5D440531B", name:"FMD 508",  region_id:"01F41992-B86E-4B43-A1D1-61684DF05310"},
    {id:"1F4A2B9C-7321-4689-8CB5-A1FE7A241F03", name:"Portland North",  region_id:"53118519-6F55-4774-A5D2-46CB49F35D23"},
    {id:"7CF01494-9422-4A04-AD30-A2A2096B5E78", name:"Atlanta North",  region_id:"43A2FBB7-3D21-4A45-8EC1-614A3B4EE8E2"},
    {id:"56AEBAB0-84D0-40BA-B23C-A4BA9013426F", name:"Phoenix North",  region_id:"FEE929C6-5A69-4242-8DD7-5E9C27F653A4"},
    {id:"0ACB49B5-B23F-4A5B-A223-A58A4D04C746", name:"Myrtle Beach",  region_id:"43A2FBB7-3D21-4A45-8EC1-614A3B4EE8E2"},
    {id:"95A89898-E86D-40BB-AD51-A6787EB2D44D", name:"New Orleans",  region_id:"CB406F0B-159F-4F15-A496-D0F431210C42"},
    {id:"3D219C6F-FE44-42F4-8072-A8AC932627BE", name:"Nashville North",  region_id:"CB406F0B-159F-4F15-A496-D0F431210C42"},
    {id:"A768FB71-E6CD-43B5-B5BF-A8DFD6AE2940", name:"Beaumont",  region_id:"2CF1A417-A6AF-4E03-8C57-5598F07A36C7"},
    {id:"3376A940-8CEC-4DDB-A347-A938B9707C80", name:"Knoxville",  region_id:"E320DAA5-BBE0-42F9-9004-1C0F41C08750"},
    {id:"4C7FFAFD-4784-4AF5-8C39-AB36AE9339AF", name:"Roanoke",  region_id:"E320DAA5-BBE0-42F9-9004-1C0F41C08750"},
    {id:"538C98D0-7FDD-4B78-8AFE-AC1102A58977", name:"Scranton",  region_id:"789BCD91-8D69-493C-B592-F5D7B05D5C5B"},
    {id:"19C6D520-2C32-4304-9C31-B0DA09B4F2CF", name:"Orlando South",  region_id:"ED587EDC-CF12-49E7-AE75-49499A1E80A7"},
    {id:"B4FF172A-FACF-42EC-BB16-B1B966C2430F", name:"Louisville",  region_id:"27901959-D77A-4532-A3B1-C0911DDF6D0E"},
    {id:"D0BAE1C0-67AD-49CE-B7D5-B2025750D0D1", name:"LA Metro",  region_id:"A153DF4E-7354-42D4-8D2B-5DCF812E16E8"},
    {id:"2C80CB22-EDF6-4DE5-BB32-B3360042D703", name:"Worcester",  region_id:"9223FEAF-0363-42BF-9254-1F0413CF2339"},
    {id:"2FCEF8B0-0C08-4FFF-A064-B3AC79136451", name:"Memphis Metro",  region_id:"CB406F0B-159F-4F15-A496-D0F431210C42"},
    {id:"0867102E-0C9D-4EF5-A705-B533D351D91C", name:"Eugene",  region_id:"53118519-6F55-4774-A5D2-46CB49F35D23"},
    {id:"32B52750-94DF-4A07-A424-B5882EB16F19", name:"Kansas City",  region_id:"613CB06E-B2E0-4AE3-81F0-D9046FC51A75"},
    {id:"F8326D60-70B3-4A2C-8D3C-B64ACAE4E2A3", name:"FMD 507",  region_id:"01F41992-B86E-4B43-A1D1-61684DF05310"},
    {id:"F6AB14EA-4785-4CA8-A024-B6CA0186CEB4", name:"Madison",  region_id:"613CB06E-B2E0-4AE3-81F0-D9046FC51A75"},
    {id:"63961CE4-8589-4CD5-BB2C-B788A1A42EF3", name:"Detroit Metro",  region_id:"27901959-D77A-4532-A3B1-C0911DDF6D0E"},
    {id:"EB036A2F-0B41-4A3A-841C-B806C145B651", name:"Washington DC",  region_id:"C729AEF2-4EC1-4944-B5E7-2442FFE58B39"},
    {id:"D8855004-2794-4C32-B3B8-B87B604BCB8A", name:"Indianapolis North",  region_id:"27901959-D77A-4532-A3B1-C0911DDF6D0E"},
    {id:"1C233B80-4A29-4E81-9EE7-B90366CC20E9", name:"Carmel", number:"20", region_id:"3DC449CF-1260-45B7-A1ED-4F844279A0E9"},
    {id:"5E1C7854-627B-4C96-8279-B97F515C0421", name:"Dagobah", number:"32", region_id:"27901959-D77A-4532-A3B1-C0911DDF6D0E"},
    {id:"414769CF-E49B-47B9-AF2C-B9A7334E9E13", name:"Harrisburg West",  region_id:"789BCD91-8D69-493C-B592-F5D7B05D5C5B"},
    {id:"FE103EEE-F022-4FBB-AD3B-B9CC613A8EBD", name:"Oklahoma City",  region_id:"59756F75-C015-4BAD-B406-D894F08A4D74"},
    {id:"6A92ADE5-3B90-4FCD-B977-BAFA6FC2D453", name:"Arlington",  region_id:"59756F75-C015-4BAD-B406-D894F08A4D74"},
    {id:"C6A0C678-45E9-46A2-8E30-BBB9D1C149C2", name:"Philadelphia",  region_id:"C729AEF2-4EC1-4944-B5E7-2442FFE58B39"},
    {id:"6A7E4545-4BEE-4B82-A847-BC8AE457DF89", name:"Simi Valley",  region_id:"A153DF4E-7354-42D4-8D2B-5DCF812E16E8"},
    {id:"A28C5026-AF5F-4F6A-928D-BC98B88B989A", name:"St. Louis West",  region_id:"CAD9588E-6D78-4F13-9B3F-61E1D6164FB8"},
    {id:"BC927678-C2FB-4DE5-97BC-BCF7FC09AC44", name:"Valdosta",  region_id:"43A2FBB7-3D21-4A45-8EC1-614A3B4EE8E2"},
    {id:"E56446A6-9C5B-4EC0-A0A8-BDDB02A15070", name:"Rapid City",  region_id:"613CB06E-B2E0-4AE3-81F0-D9046FC51A75"},
    {id:"29735654-BD4A-446A-8C58-C08F1C975224", name:"Tampa",  region_id:"ED587EDC-CF12-49E7-AE75-49499A1E80A7"},
    {id:"DA31E172-457D-4DF7-8FB9-C09365E3B6E0", name:"Bradenton",  region_id:"ED587EDC-CF12-49E7-AE75-49499A1E80A7"},
    {id:"65900BAC-9C41-4D5A-A183-C4DFC2712FB9", name:"Cleveland North",  region_id:"789BCD91-8D69-493C-B592-F5D7B05D5C5B"},
    {id:"FE94D72E-CD09-45B2-87DD-C735C1F375A2", name:"Harrisburg East",  region_id:"789BCD91-8D69-493C-B592-F5D7B05D5C5B"},
    {id:"8D6347D9-B63C-4B75-8AEB-C852406F82BE", name:"Dover",  region_id:"C729AEF2-4EC1-4944-B5E7-2442FFE58B39"},
    {id:"EDD09FF4-D06F-44C8-BE35-C86A109D14B2", name:"Hawaii",  region_id:"53118519-6F55-4774-A5D2-46CB49F35D23"},
    {id:"84608CA4-F2CD-436A-8772-C9C34FD75C75", name:"Calgary",  region_id:"13EDC53F-3E7D-4915-9017-FD7A9E75296B"},
    {id:"FEC5695A-EF77-420D-B823-CAF823E6DAF4", name:"Chicago North",  region_id:"CAD9588E-6D78-4F13-9B3F-61E1D6164FB8"},
    {id:"76F61A99-F7C0-4119-AA6B-CC1D5B11F610", name:"Hartford",  region_id:"9223FEAF-0363-42BF-9254-1F0413CF2339"},
    {id:"B9062DB6-D8F4-44BB-A32A-CC1F61964484", name:"Go Houston",  region_id:"F4027BD8-D016-4EDC-A128-4F7FBB981408"},
    {id:"75DBB7BC-035C-432A-8CD6-CC7EB48E6746", name:"Pittsburgh East",  region_id:"1DD6A1DC-D87E-4A3E-B8C0-F6996C104DE8"},
    {id:"2EF430FD-64CA-4991-AF71-CDCD392324EF", name:"Green Bay",  region_id:"613CB06E-B2E0-4AE3-81F0-D9046FC51A75"},
    {id:"425015FB-561A-4842-8CF6-CEC92481FB36", name:"DVF Southwest", number:"53", region_id:"01110BE1-3C80-422C-BDFA-3E1079E7DE68"},
    {id:"47C18EB1-BC39-419E-8FDA-CEDA318F8472", name:"Atlanta West",  region_id:"43A2FBB7-3D21-4A45-8EC1-614A3B4EE8E2"},
    {id:"FFEC1E44-83DF-472D-9941-CEF5ADA408D0", name:"Jackson Metro",  region_id:"CB406F0B-159F-4F15-A496-D0F431210C42"},
    {id:"951B63F8-26DD-4B01-B343-D162A6ECF7FF", name:"Bakersfield",  region_id:"A66D330A-221D-4342-89E6-57130C3BB543"},
    {id:"1E86646D-A274-4DFD-9844-D3DD51A74D8F", name:"Northern Wisconsin",  region_id:"613CB06E-B2E0-4AE3-81F0-D9046FC51A75"},
    {id:"F659D9FB-D04F-41E7-91FF-D3E88B4212FE", name:"Rochester",  region_id:"789BCD91-8D69-493C-B592-F5D7B05D5C5B"},
    {id:"0112D9BF-8C00-4AD4-AFC2-D681C3424879", name:"Bronx",  region_id:"9223FEAF-0363-42BF-9254-1F0413CF2339"},
    {id:"94B6F43E-67B3-4CA9-8713-D6E29705C040", name:"Corpus Christi",  region_id:"2CF1A417-A6AF-4E03-8C57-5598F07A36C7"},
    {id:"EB9102C3-841C-465B-8D89-D701753C9B9F", name:"Corporate Canada",  region_id:"8C8FE1DC-FB9C-403B-B026-D4D28F1CAA14"},
    {id:"383AA404-EBF4-4F94-8C50-D71BA422DA80", name:"Sacramento East",  region_id:"A66D330A-221D-4342-89E6-57130C3BB543"},
    {id:"254F5335-A8AC-464A-A092-D8E672BDA2A2", name:"Phoenix South",  region_id:"FEE929C6-5A69-4242-8DD7-5E9C27F653A4"},
    {id:"3C1C56E7-A511-4F48-AC57-D9AED1A5E13A", name:"Trenton South",  region_id:"9223FEAF-0363-42BF-9254-1F0413CF2339"},
    {id:"6C7EA0C3-329A-4D4E-89A0-DA194283EE31", name:"Houston West",  region_id:"2CF1A417-A6AF-4E03-8C57-5598F07A36C7"},
    {id:"8791F2AB-D0DE-462D-8719-DA7446C672B6", name:"Huntington Beach",  region_id:"A153DF4E-7354-42D4-8D2B-5DCF812E16E8"},
    {id:"EEEE3F7D-5005-4DEC-BB7D-DD112464C184", name:"Ft. Lauderdale North",  region_id:"ED587EDC-CF12-49E7-AE75-49499A1E80A7"},
    {id:"C86D0289-09F4-463C-B39F-DDE4369328B9", name:"Orlando North",  region_id:"ED587EDC-CF12-49E7-AE75-49499A1E80A7"},
    {id:"B3F748D5-94F1-4E0B-AEFA-DEACF0555A8D", name:"Grand Rapids",  region_id:"27901959-D77A-4532-A3B1-C0911DDF6D0E"},
    {id:"BDB8F96A-A8D6-4497-895C-DEC8AD7C5AFF", name:"Denver North",  region_id:"FEE929C6-5A69-4242-8DD7-5E9C27F653A4"},
    {id:"3FA4A286-6BFD-4F16-BC5D-E1703537CC6D", name:"Ontario Canada East",  region_id:"903BDAE5-2707-4B30-9245-E5DE9671C375"},
    {id:"CBD6FABC-6E59-4F01-AED0-E34BE5CC41A4", name:"Minneapolis Metro",  region_id:"613CB06E-B2E0-4AE3-81F0-D9046FC51A75"},
    {id:"A2C617CE-F6D5-4A87-A3D5-E35A0587AA14", name:"Boston South",  region_id:"9223FEAF-0363-42BF-9254-1F0413CF2339"},
    {id:"FD165948-ACD3-4C5A-ADE1-E7AD48B58D7F", name:"Champaign",  region_id:"CAD9588E-6D78-4F13-9B3F-61E1D6164FB8"},
    {id:"F5A208A2-6661-4478-836F-E8C8DB3D3ED0", name:"Orlando Metro",  region_id:"ED587EDC-CF12-49E7-AE75-49499A1E80A7"},
    {id:"F1837505-602B-4566-8784-EAF81ED99021", name:"Brooklyn",  region_id:"9223FEAF-0363-42BF-9254-1F0413CF2339"},
    {id:"F988BDEC-7F90-41BB-B226-EC433BBAD4E4", name:"Memphis North",  region_id:"CB406F0B-159F-4F15-A496-D0F431210C42"},
    {id:"8CCB32B7-24E2-44EA-928B-ECEF22BE2C75", name:"Virginia Beach",  region_id:"E320DAA5-BBE0-42F9-9004-1C0F41C08750"},
    {id:"75CD1C85-A915-4CA2-A8F4-ED3A9BBDBF16", name:"Dothan",  region_id:"CB406F0B-159F-4F15-A496-D0F431210C42"},
    {id:"E49417DF-EC70-49C9-AFF2-EDA8BAEE5E19", name:"Atlanta South",  region_id:"43A2FBB7-3D21-4A45-8EC1-614A3B4EE8E2"},
    {id:"DE1AAE41-BB35-4ADC-BF16-EDC0BAC1FF1D", name:"Dallas South",  region_id:"59756F75-C015-4BAD-B406-D894F08A4D74"},
    {id:"406209CD-E051-4FFE-B71D-EF9DD9FC9EF1", name:"Baton Rouge",  region_id:"CB406F0B-159F-4F15-A496-D0F431210C42"},
    {id:"E78422FE-8725-431B-B054-F16CA45188D3", name:"Atlanta Metro",  region_id:"43A2FBB7-3D21-4A45-8EC1-614A3B4EE8E2"},
    {id:"5213D005-C38E-488D-B80A-F2DD9A99E18F", name:"GO Orlando",  region_id:"F4027BD8-D016-4EDC-A128-4F7FBB981408"},
    {id:"84D67511-C83C-444A-B4BE-F64466D297CF", name:"Sacramento Metro",  region_id:"A66D330A-221D-4342-89E6-57130C3BB543"},
    {id:"E6894779-4932-4C93-B12D-F68DAD2B3131", name:"Chicago Metro",  region_id:"CAD9588E-6D78-4F13-9B3F-61E1D6164FB8"},
    {id:"8F749859-5190-42A2-B2F9-F68E990D3576", name:"Des Moines",  region_id:"613CB06E-B2E0-4AE3-81F0-D9046FC51A75"},
    {id:"62A87EC3-1E53-45C4-8086-F6D6D292E544", name:"Cincinnati",  region_id:"27901959-D77A-4532-A3B1-C0911DDF6D0E"},
    {id:"31C58DE7-26FE-45C1-B1B2-F6D7C03EA71E", name:"Billings",  region_id:"613CB06E-B2E0-4AE3-81F0-D9046FC51A75"},
    {id:"859B450C-DF82-4E12-A88D-F8060C89B596", name:"Ontario CA",  region_id:"A153DF4E-7354-42D4-8D2B-5DCF812E16E8"},
    {id:"8339D373-2EF5-4C7D-B31D-F914DBC83956", name:"Richmond",  region_id:"E320DAA5-BBE0-42F9-9004-1C0F41C08750"},
    {id:"8D045F43-C2EB-415E-B42D-F973F431C99E", name:"Toronto East",  region_id:"903BDAE5-2707-4B30-9245-E5DE9671C375"},
    {id:"B8E171A6-870F-430E-B239-FA838FD49610", name:"Newburgh",  region_id:"9223FEAF-0363-42BF-9254-1F0413CF2339"},
    {id:"951C36A8-4E80-476E-BAE1-FC355131777C", name:"El Paso East",  region_id:"FEE929C6-5A69-4242-8DD7-5E9C27F653A4"},
    {id:"DE4D36DC-5AE3-45BC-9E8E-FDA8CBF00FB2", name:"Ft. Lauderdale South",  region_id:"ED587EDC-CF12-49E7-AE75-49499A1E80A7"},
    {id:"C9269D84-C40D-4A18-8A70-FF752442934D", name:"El Paso West",  region_id:"FEE929C6-5A69-4242-8DD7-5E9C27F653A4"}
];

var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
    listenables: [Actions],
    triggerChange: function() {
        this.trigger('change', markets);
    },
    getMarkets: function() {
        this.triggerChange();
    }
});