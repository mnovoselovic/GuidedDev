define("UsrOceanRealty_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrOceanRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "d510dcfb-da0f-4d8a-b6f5-bfeb595ab803",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "UsrTitle",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrUSDprice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrUSDprice_bucf2qt",
					"labelPosition": "auto",
					"control": "$PDS_UsrUSDprice_bucf2qt"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrArea",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrArea_yw9hqvv",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_yw9hqvv",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrCommission",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCommission_swz6d9c",
					"labelPosition": "auto",
					"control": "$PDS_UsrCommission_swz6d9c",
					"readonly": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_0pcje53",
					"labelPosition": "auto",
					"control": "$PDS_UsrType_0pcje53",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_11zjavy",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_11zjavy_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrOfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_70azjcp",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferType_70azjcp",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_obaesy4",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_obaesy4_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrOfferType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrComment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_jbo1kgb",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_jbo1kgb",
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrCommissionPercent",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrOfferTypeUsrCommissionPercent",
					"control": "$PDS_UsrOfferTypeUsrCommissionPercent",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_ihkx2nz",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_ihkx2nz_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_opyllxn",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_ihkx2nz",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_rh6gcnh",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_opyllxn",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_pg8i9h2",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_pg8i9h2_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrEntity_2852e6c"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_rh6gcnh",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_m4fomdv",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_m4fomdv_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_4iokwvyDS"
						}
					}
				},
				"parentName": "FlexContainer_rh6gcnh",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_3ia6rn5",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_3ia6rn5_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_rh6gcnh",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_dcydpj1",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_dcydpj1_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_4iokwvy"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_3ia6rn5",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_r4606z4",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_r4606z4_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrEntity_2852e6c"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_3ia6rn5",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_tzicifi",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_tzicifi_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_4iokwvy"
					]
				},
				"parentName": "FlexContainer_rh6gcnh",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_y18fjxq",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_ihkx2nz",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_4iokwvy",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_4iokwvy",
					"primaryColumnName": "GridDetail_4iokwvyDS_Id",
					"columns": [
						{
							"id": "54b42bea-efd5-7e2c-8c86-f6f7f0279180",
							"code": "GridDetail_4iokwvyDS_UsrName",
							"caption": "#ResourceString(GridDetail_4iokwvyDS_UsrName)#",
							"dataValueType": 28
						},
						{
							"id": "1aecedc3-dad0-aef1-d9a6-1ca604a60b91",
							"code": "GridDetail_4iokwvyDS_UsrVisitDateTime",
							"path": "UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_4iokwvyDS_UsrVisitDateTime)#",
							"dataValueType": 7
						},
						{
							"id": "a8db3d0d-724c-c309-5988-d2647ee43a6c",
							"code": "GridDetail_4iokwvyDS_UsrPotentialCustomer",
							"path": "UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_4iokwvyDS_UsrPotentialCustomer)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "8a2ab8e4-a9ab-3941-8f84-3d4e1dc2c91e",
							"code": "GridDetail_4iokwvyDS_UsrOwner",
							"path": "UsrOwner",
							"caption": "#ResourceString(GridDetail_4iokwvyDS_UsrOwner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "423ada6f-c18e-14d4-f93e-75563745a586",
							"code": "GridDetail_4iokwvyDS_UsrRealtyVisitsComment",
							"path": "UsrRealtyVisitsComment",
							"caption": "#ResourceString(GridDetail_4iokwvyDS_UsrRealtyVisitsComment)#",
							"dataValueType": 28
						}
					]
				},
				"parentName": "GridContainer_y18fjxq",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrTitle"
						}
					},
					"PDS_UsrUSDprice_bucf2qt": {
						"modelConfig": {
							"path": "PDS.UsrUSDprice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrArea_yw9hqvv": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 100,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrType_0pcje53": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrOfferType_70azjcp": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrComment_jbo1kgb": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					},
					"GridDetail_4iokwvy": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_4iokwvyDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_4iokwvyDS_UsrName": {
									"modelConfig": {
										"path": "GridDetail_4iokwvyDS.UsrName"
									}
								},
								"GridDetail_4iokwvyDS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_4iokwvyDS.UsrVisitDateTime"
									}
								},
								"GridDetail_4iokwvyDS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_4iokwvyDS.UsrPotentialCustomer"
									}
								},
								"GridDetail_4iokwvyDS_UsrOwner": {
									"modelConfig": {
										"path": "GridDetail_4iokwvyDS.UsrOwner"
									}
								},
								"GridDetail_4iokwvyDS_UsrRealtyVisitsComment": {
									"modelConfig": {
										"path": "GridDetail_4iokwvyDS.UsrRealtyVisitsComment"
									}
								},
								"GridDetail_4iokwvyDS_Id": {
									"modelConfig": {
										"path": "GridDetail_4iokwvyDS.Id"
									}
								}
							}
						}
					},
					"PDS_UsrCommission_swz6d9c": {
						"modelConfig": {
							"path": "PDS.UsrCommission"
						}
					},
					"PDS_UsrOfferTypeUsrCommissionPercent": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommissionPercent"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS"
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrOceanRealty",
							"attributes": {
								"UsrOfferTypeUsrCommissionPercent": {
									"path": "UsrOfferType.UsrCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_4iokwvyDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrEntity_2852e6c",
							"attributes": {
								"UsrName": {
									"path": "UsrName"
								},
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrOwner": {
									"path": "UsrOwner"
								},
								"UsrRealtyVisitsComment": {
									"path": "UsrRealtyVisitsComment"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
        request: "crt.HandleViewModelAttributeChangeRequest",
        /* The custom implementation of the system query handler. */
        handler: async (request, next) => {
            if (request.attributeName === 'PDS_UsrUSDprice_bucf2qt') {
                const selectedPrice = await request.$context.PDS_UsrUSDprice_bucf2qt;
				//this.console.log("Price =" + selectedPrice);
               // const isGreaterThan = (selectedPrice > 10000);
                /* Check the request status. */
                if (selectedPrice > 10000) {
                    /* If the request is new, apply the required validator to the UsrDescription attribute. */
                    request.$context.enableAttributeValidator('PDS_UsrComment_jbo1kgb', 'required');
                } else {
                    /* Do not apply the required validator to the UsrDescription attribute for non-new requests. */
                    request.$context.disableAttributeValidator('PDS_UsrComment_jbo1kgb', 'required');
                }
            }
            /* Call the next handler if it exists and return its result. */
            return next?.handle(request);
        }
    },
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
					if (request.attributeName === 'PDS_UsrUSDprice_bucf2qt' || 						// if price changed
					   request.attributeName === 'PDS_UsrOfferTypeUsrCommissionPercent' ) { 		// or percent changed
						var price = await request.$context.PDS_UsrUSDprice_bucf2qt;
						var percent = await request.$context.PDS_UsrOfferTypeUsrCommissionPercent;
						var commission = price * percent / 100;
						request.$context.PDS_UsrCommission_swz6d9c = commission;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			"usr.DGValidator": {
						validator: function (config) {
							return function (control) {
								let value = control.value;
								let minValue = config.minValue;
								let valueIsCorrect = value >= minValue;
								var result;
								if (valueIsCorrect) {
									result = null;
								} else {
									result = {
										"usr.DGValidator": { 
											message: config.message
										}
									};
								}
								return result;
							};
						},
						params: [
							{
								name: "minValue"
							},
							{
								name: "message"
							}
						],
						async: false
					}
		}/**SCHEMA_VALIDATORS*/
	};
});