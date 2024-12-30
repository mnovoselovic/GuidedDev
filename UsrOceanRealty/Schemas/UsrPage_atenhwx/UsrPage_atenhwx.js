define("UsrPage_atenhwx", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "UsrVisitDateTime",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.UsrEntity_2852e6cDS_UsrVisitDateTime_vzvmeq9",
					"labelPosition": "above",
					"control": "$UsrEntity_2852e6cDS_UsrVisitDateTime_vzvmeq9",
					"pickerType": "datetime"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrPotentialCustomer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrEntity_2852e6cDS_UsrPotentialCustomer_7xfhv0f",
					"labelPosition": "above",
					"control": "$UsrEntity_2852e6cDS_UsrPotentialCustomer_7xfhv0f",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_beixktq",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_beixktq_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrPotentialCustomer",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrOwner",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrEntity_2852e6cDS_UsrOwner_5y4m96q",
					"labelPosition": "above",
					"control": "$UsrEntity_2852e6cDS_UsrOwner_5y4m96q",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_ylythyu",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ylythyu_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrOwner",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrRealtyVisitsComment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrEntity_2852e6cDS_UsrRealtyVisitsComment_03fm17t",
					"labelPosition": "above",
					"control": "$UsrEntity_2852e6cDS_UsrRealtyVisitsComment_03fm17t",
					"multiline": false
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrEntity_2852e6cDS_UsrVisitDateTime_vzvmeq9": {
						"modelConfig": {
							"path": "UsrEntity_2852e6cDS.UsrVisitDateTime"
						}
					},
					"UsrEntity_2852e6cDS_UsrPotentialCustomer_h6y8p2g": {
						"modelConfig": {
							"path": "UsrEntity_2852e6cDS.UsrPotentialCustomer"
						}
					},
					"UsrEntity_2852e6cDS_UsrPotentialCustomer_7xfhv0f": {
						"modelConfig": {
							"path": "UsrEntity_2852e6cDS.UsrPotentialCustomer"
						}
					},
					"UsrEntity_2852e6cDS_UsrOwner_ohemlvd": {
						"modelConfig": {
							"path": "UsrEntity_2852e6cDS.UsrOwner"
						}
					},
					"UsrEntity_2852e6cDS_UsrOwner_5y4m96q": {
						"modelConfig": {
							"path": "UsrEntity_2852e6cDS.UsrOwner"
						}
					},
					"UsrEntity_2852e6cDS_UsrRealtyVisitsComment_03fm17t": {
						"modelConfig": {
							"path": "UsrEntity_2852e6cDS.UsrRealtyVisitsComment"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"UsrEntity_2852e6cDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrEntity_2852e6c"
							}
						}
					},
					"primaryDataSourceName": "UsrEntity_2852e6cDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});