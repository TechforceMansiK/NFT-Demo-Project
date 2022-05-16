import React, { useState } from "react";
import {
  Container,
  FormGroup,
  Stack,
  Grid,
  IconButton,
  Button,
} from "@mui/material";

import styles from "../components/createNFT/createNFT.module.css";
import { Box } from "@mui/system";
import ImageTwoTone from "@mui/icons-material/Image";
import CloseIcon from "@mui/icons-material/Close";
import ListIcon from "@mui/icons-material/List";
import StarIcon from "@mui/icons-material/Star";
import BarChartIcon from "@mui/icons-material/BarChart";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import WarningIcon from "@mui/icons-material/Warning";
import Model from "../components/model/model";
import InputComponent from "../components/createNFT/InputComponent";
import AssetComponent from "../components/createNFT/AssetComponent";
import BasicSwitch from "../components/basicswitch/BasicSwitch";
import { Link } from "react-router-dom";

const CreateNFT = (props) => {
  const hiddenFileInput = React.useRef(null);
  const [image, setImage] = useState();

  const name = useFormInput("");
  const externalLink = useFormInput("");
  const description = useFormInput("");
  const supply = useFormInput("1");
  const blockchain = useFormInput("ethereum");
  const freezeMetadata = useFormInput("");

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const onImageChange = (event) => {
    const fileUploaded = event.target.files[0];
    setImage(URL.createObjectURL(event.target.files[0]));
    props.handleFile(fileUploaded);
  };

  const onImageRemove = (event) => {
    event.stopPropagation();
    setImage();
  };
  
  const [openPropertiesModel, setOpenPropertiesModel] = React.useState(false);
  const handleOpenPropertiesModel = () => setOpenPropertiesModel(true);
  const handleClosePropertiesModel = () => setOpenPropertiesModel(false);

  const [openLevelModel, setOpenLevelModel] = React.useState(false);
  const handleOpenLevelModel = () => setOpenLevelModel(true);
  const handleCloseLevelModel = () => setOpenLevelModel(false);

  const [openStatsModel, setStatsModel] = React.useState(false);
  const handleOpenStatsModel = () => setStatsModel(true);
  const handleCloseStatsModel = () => setStatsModel(false);

  const [openToolTipModel, setTooltipModel] = React.useState(false);
  const handleOpenToolTipModel = () => setTooltipModel(true);
  const handleCloseToolTipModel = () => setTooltipModel(false);

  const getMarkdownLink = () => {
    return (
      <>
        The description will be included on the item's detail page underneath
        its image.{" "}
        <Link
          className={styles.markdownLink}
          to="https://www.markdownguide.org/cheat-sheet/"
          rel="nofollow noopener"
          target="_blank"
        >
          Markdown
        </Link>{" "}
        syntax is supported.
      </>
    );
  };

  const getFreezeMetadataTooltip = () => {
    return (
      <>
        Once locked, your content cannot be edited or removed as it is
        permanently stored in decentralized file storage, which will be
        accessible for other clients to view and use.{" "}
        <Link
          to="https://openseahelp.zendesk.com/hc/en-us/articles/1500012270982"
          rel="nofollow noopener"
          target="_blank"
        >
          Learn more about freezing metadata here
        </Link>
        .
      </>
    );
  };

  const getCollectionTooltip = () => {
    return (
      <>
        Moving Items to a different collection may take upto 30 minutes. You can
        &nbsp;
        <Link className={styles.markdownLink} target="_blank" to="/collections">
          manage your collections here
        </Link>
      </>
    );
  };

  const getSensitiveContentTooltip = () => {
    return (
      <>
        Setting your asset as explicit and sensitive content, like pornography
        and other not safe for work (NSFW) content, will protect users with safe
        search while browsing OpenSea.&nbsp;
        <Link
          className={styles.markdownLink}
          target="_blank"
          rel="nofollow noopener"
          to="https://support.opensea.io/hc/en-us/articles/1500010882222-Is-explicit-sensitive-content-allowed-on-OpenSea-"
        >
          Learn more about explicit content at OpenSea here.
        </Link>
      </>
    );
  };

  return (
    <>
      <Container maxWidth="md" className="pt-4">
        <Stack spacing={2}>
          <header>
            <h1 className={styles.header}>Create New Item</h1>
          </header>
          <div>
            <FormGroup>
              <p className={styles.subText}>
                <font color="red">*</font> Required fields
              </p>
              <Box>
                <label htmlFor="media" className={styles.mediaLable}>
                  Image, Video, Audio, or 3D Model
                </label>
              </Box>
              <Box>
                <span className={styles.subText}>
                  File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV,
                  OGG, GLB, GLTF. Max size: 100 MB
                </span>
              </Box>
              <Grid
                onClick={handleClick}
                className={styles.fileInputGrid}
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{
                  p: 1,
                  border: "3px dashed rgb(204, 204, 204)",
                  borderRadius: "10px",
                  width: 350,
                  height: 257,
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                <input
                  type="file"
                  ref={hiddenFileInput}
                  onChange={onImageChange}
                  id="media"
                  name="media"
                  accept="image/*,video/*,audio/*,webgl/*,.glb,.gltf"
                  style={{ display: "none" }}
                  autoComplete="off"
                  tabIndex="-1"
                />
                {!image ? (
                  <Grid item xs={3}>
                    <ImageTwoTone
                      sx={{ fontSize: 84, color: "rgb(204, 204, 204)" }}
                    />
                  </Grid>
                ) : (
                  <Grid item xs={3}>
                    <div className={styles.removeImage}>
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                        onClick={onImageRemove}
                      >
                        <CloseIcon sx={{ color: "rgb(179, 179, 179)" }} />
                      </IconButton>
                    </div>
                    <div className={styles.imageDiv}>
                      {image && (
                        <img
                          id="target"
                          src={image}
                          alt="preview"
                          className={styles.image}
                        />
                      )}
                    </div>
                  </Grid>
                )}
              </Grid>
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="left"
                justifyContent="center"
                sx={{
                  pt: 2,
                }}
              >
                <InputComponent
                  label="Name"
                  type="text"
                  id="txtName"
                  name="txtName"
                  placeholder="Item name"
                  {...name}
                  required={true}
                  prefix={true}
                />

                <InputComponent
                  sx={{ mt: "10px" }}
                  label="External link"
                  subText="OpenSea will include a link to this URL on this item's detail page, so
                  that users can click to learn more about it. You are welcome to link
                  to your own webpage with more details."
                  type="text"
                  id="txtExternalLink"
                  name="txtExternalLink"
                  placeholder="https://yoursite.io/item/123"
                  {...externalLink}
                  prefix={true}
                />

                <InputComponent
                  sx={{ mt: "10px" }}
                  label="Description"
                  subText={getMarkdownLink()}
                  type="textarea"
                  id="txtaDescription"
                  name="txtaDescription"
                  placeholder="Provide a detailed description of your item."
                  {...description}
                  prefix={false}
                />

                <InputComponent
                  sx={{ mt: "10px" }}
                  label="Collection"
                  subText="This is the collection where your item will appear."
                  subTextToolTip={getCollectionTooltip()}
                  type="autocomplete"
                  id="cmbCollection"
                  options={collectionList}
                  prefix={false}
                />

                <AssetComponent
                  icon={<ListIcon sx={{ fontSize: "24px" }} />}
                  title="Properties"
                  subTitle="Textual traits that show up as rectangles"
                  onClick={handleOpenPropertiesModel}
                />

                <AssetComponent
                  icon={<StarIcon sx={{ fontSize: "24px" }} />}
                  title="Levels"
                  subTitle="Numerical traits that show as a progress bar"
                  onClick={handleOpenLevelModel}
                />

                <AssetComponent
                  icon={<BarChartIcon sx={{ fontSize: "24px" }} />}
                  title="Stats"
                  subTitle="Numerical traits that just show as numbers"
                  onClick={handleOpenStatsModel}
                />

                <AssetComponent
                  icon={
                    <LockOpenIcon
                      sx={{ fontSize: "24px", color: "rgb(152, 125, 240)" }}
                    />
                  }
                  title="Unlockable Content"
                  subTitle="Include unlockable content that can only be revealed by
                  the owner of the item."
                  button={<BasicSwitch />}
                />

                <AssetComponent
                  icon={<WarningIcon sx={{ fontSize: "24px" }} />}
                  title="Explicit & Sensitive Content"
                  subTitle="Set this item as explicit and sensitive content"
                  tooltip={getSensitiveContentTooltip()}
                  button={<BasicSwitch />}
                />

                <InputComponent
                  sx={{ mt: "10px" }}
                  label="Supply"
                  subText="The number of items that can be minted. No gas cost to you!"
                  placeholder="1"
                  subTextToolTipIcon={true}
                  onClick={handleOpenToolTipModel}
                  type="text"
                  id="txtSupply"
                  name="txtSupply"
                  options={collectionList}
                  prefix={true}
                  {...supply}
                  disabled
                />

                <InputComponent
                  sx={{ mt: "10px" }}
                  label="Blockchain"
                  onClick={handleOpenToolTipModel}
                  type="nativeselect"
                  id="selBlockchain"
                  options={BlockchainList}
                  {...blockchain}
                />

                <InputComponent
                  sx={{ mt: "10px" }}
                  label="Freeze metadata"
                  labelTooltip={getFreezeMetadataTooltip()}
                  subText="Freezing your metadata will allow you to permanently lock
                  and store all of this item's content in decentralized file
                  storage."
                  placeholder="To freeze your metadata, you must create your item first."
                  type="text"
                  id="txtFreezeMetadata"
                  name="txtFreezeMetadata"
                  prefix={true}
                  {...freezeMetadata}
                  disabled
                />

                <Grid item sx={{ mt: "30px", mb: "30px" }}>
                  <hr />
                </Grid>
                <Grid item sx={{ mt: "10px" }}>
                  <Button variant="contained" className={styles.btnCreate}>
                    Create
                  </Button>
                </Grid>
              </Grid>
            </FormGroup>
          </div>
        </Stack>
      </Container>
      <Model
        open={openPropertiesModel}
        handleOpen={handleOpenPropertiesModel}
        handleClose={handleClosePropertiesModel}
        heading="Add Properties"
        sectionText="Properties show up underneath your item, are clickable, and can be
            filtered in your collection's sidebar."
        tableHeadings={["Type", "Name"]}
        placeholders={["Character", "Male"]}
        isFooterShow={true}
      />

      <Model
        open={openLevelModel}
        handleOpen={handleOpenLevelModel}
        handleClose={handleCloseLevelModel}
        heading="Add Levels"
        sectionText="Levels show up underneath your item, are clickable, and can be filtered in your collection's sidebar."
        tableHeadings={["Name", "Value"]}
        isNumericInput={true}
        placeholder="Speed"
        isFooterShow={true}
      />

      <Model
        open={openStatsModel}
        handleOpen={handleOpenStatsModel}
        handleClose={handleCloseStatsModel}
        heading="Add Stats"
        sectionText="Stats show up underneath your item, are clickable, and can be filtered in your collection's sidebar."
        tableHeadings={["Name", "Value"]}
        isNumericInput={true}
        placeholder="Speed"
        isFooterShow={true}
      />

      <Model
        open={openToolTipModel}
        handleOpen={handleOpenToolTipModel}
        handleClose={handleCloseToolTipModel}
        heading="How does token supply work?"
        isTooltipModal={true}
        isFooterShow={false}
      />
    </>
  );
};

export default CreateNFT;

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

const collectionList = [
  { label: "The Shawshank Redemption", collection: 1994 },
  { label: "The Godfather", collection: 1972 },
  { label: "The Godfather: Part II", collection: 1974 },
  { label: "The Dark Knight", collection: 2008 },
  { label: "12 Angry Men", collection: 1957 },
  { label: "Schindler's List", collection: 1993 },
  { label: "Pulp Fiction", collection: 1994 },
];

const BlockchainList = [
  { label: "Etherum", key: "etherum" },
  { label: "Polygon", key: "polygon" },
];
