import { StyleSheet } from "@react-pdf/renderer"

export const styles = StyleSheet.create({
  page: {    
    backgroundColor: "#fff",
    color: "#262626",
    fontFamily: "Helvetica",
    fontSize: "12",
    padding: "30px 50px",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title: {
    fontSize: "24",
    fontFamily: "Helvetica-Bold",
  },
  textBold: {
    fontFamily: "Helvetica-Bold",
  },
  spaceY: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },
  table: {
    width: "100%",
    borderColor: "1px solid #f3f4f6",
    margin: "20px 0",
  },
  td: {
    padding: 6,
  },
})