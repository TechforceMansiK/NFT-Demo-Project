import React from "react";

import { Box, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import styles from "./model.module.css";
import Accordions from "../accordions/Accordions";

const style = {
  position: "relative",
  border: "1px solid rgb(229, 232, 235)",
  background: "rgb(255, 255, 255)",
  width: "550px",
  maxHeight: "calc(100vh - 0px)",
  maxWidth: "calc(100% - 32px)",
  borderRadius: "10px",

  marginTop: "0px",
  marginBottom: "0px",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -30%)",
  bgcolor: "rgb(255, 255, 255)",
};

const Model = (props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <header className={styles.modelHeader}>
          <h4 className={styles.modelHeaderText}>{props.heading}</h4>
        </header>
        <section className={styles.modelSection}>
          <p className={styles.modelSectionHeading}>{props.sectionText}</p>
          {props.isTooltipModal ? (
            <Accordions />
          ) : (
            <table>
              <thead className={styles.tableHead}>
                <tr className={styles.tableHeadRow}>
                  <th className={styles.tableHeadColmn}>
                    {props.tableHeadings[0]}
                  </th>
                  <th className={styles.tableHeadColmn}>
                    {props.tableHeadings[1]}
                  </th>
                </tr>
              </thead>
              <tbody className={styles.tableBody}>
                {props.isNumericInput ? (
                  <tr>
                    <td className={styles.tableBodyColumn}>
                      <div>
                        <div
                          className={
                            styles.tableBodyInput +
                            " " +
                            styles.modelSectionTextValueInput
                          }
                        >
                          <div className={styles.tableInputLeftLabel}>
                            <button className={styles.tableBodyInputButton}>
                              <CloseIcon sx={{ fontSize: "24px" }} />
                            </button>
                          </div>
                          <div className={styles.inputPrefix}></div>
                          <input
                            type="text"
                            autoCapitalize="off"
                            autoComplete="off"
                            autoCorrect="off"
                            className={styles.tableBodyInputMain}
                            data-testid="Input"
                            id="name"
                            name="name"
                            placeholder={props.placeholder}
                            required=""
                            spellCheck="false"
                            value=""
                          />
                        </div>
                      </div>
                    </td>
                    <td className={styles.tableBodyColumn}>
                      <div>
                        <div
                          className={
                            styles.tableBodyInput +
                            " " +
                            styles.modelSectionNumberValueInput +
                            " " +
                            styles.modelSectionTextValueInput
                          }
                        >
                          <div className={styles.inputPrefix}></div>
                          <input
                            type="number"
                            className={styles.modelSectionNumberInput}
                            id="name"
                            name="name"
                            value="3"
                          />
                          <div className={styles.tableInputRightLabel}>
                            <div style={{ padding: "0px 16px" }}>Of</div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className={styles.tableBodyColumn}>
                      <div>
                        <div
                          className={
                            styles.tableBodyInput +
                            " " +
                            styles.modelSectionNumberMaxInput
                          }
                        >
                          <div className={styles.inputPrefix}></div>
                          <input
                            type="number"
                            className={styles.modelSectionNumberInput}
                            data-testid="Input"
                            id="name"
                            name="name"
                            required=""
                            value="5"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td className={styles.tableBodyColumn}>
                      <div>
                        <div className={styles.tableBodyInput}>
                          <div className={styles.tableInputLeftLabel}>
                            <button className={styles.tableBodyInputButton}>
                              <CloseIcon sx={{ fontSize: "24px" }} />
                            </button>
                          </div>
                          <div className={styles.inputPrefix}></div>
                          <input
                            type="text"
                            autoCapitalize="off"
                            autoComplete="off"
                            autoCorrect="off"
                            className={styles.tableBodyInputMain}
                            data-testid="Input"
                            id="name"
                            name="name"
                            placeholder={props.placeholders[0]}
                            required=""
                            spellCheck="false"
                            value=""
                          />
                        </div>
                      </div>
                    </td>
                    <td className={styles.tableBodyColumn}>
                      <div>
                        <div className={styles.tableBodyInput}>
                          <div className={styles.inputPrefix}></div>
                          <input
                            type="text"
                            autoCapitalize="off"
                            autoComplete="off"
                            autoCorrect="off"
                            className={styles.tableBodyInputMain}
                            data-testid="Input"
                            id="name"
                            name="name"
                            placeholder={props.placeholders[1]}
                            required=""
                            spellCheck="false"
                            value=""
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
          {!props.isTooltipModal && (
            <button type="button" className={styles.modelSectionAddMore}>
              Add more
            </button>
          )}
        </section>
        
        {props.isFooterShow ? (
          <footer className={styles.modelFooter}>
            <button type="button" className={styles.modelFooterBtnSave}>
              Save
            </button>
          </footer>
        ) : (
          ""
        )}
        <button className={styles.modelBtnClose} onClick={props.handleClose}>
          <CloseIcon sx={{ fontSize: "24px", color: "rgb(138, 147, 155)" }} />
        </button>
      </Box>
    </Modal>
  );
};

export default Model;
