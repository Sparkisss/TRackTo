import { Page, Text, View, Document, PDFViewer, PDFDownloadLink } from "@react-pdf/renderer"
import {Table, TR, TH, TD} from "@ag-media/react-pdf-table"
import { styles } from "./EquipmentStyle"
import { Button } from "antd"

export function Equipment() {
  const EquipmentPDF = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Invoice</Text>
            <Text>Invoice #INV-2025-001</Text>
          </View>
          <View style={styles.spaceY}>
            <Text style={styles.textBold}>Company Name</Text>
            <Text>123 Busines Street</Text>
            <Text>City, State 12345</Text>
          </View>
        </View>
        <Table style={styles.table}>
          <TH style={styles.textBold}>
            <TD style={styles.td}>Description</TD>
            <TD style={styles.td}>Quantity</TD>
            <TD style={styles.td}>Unit Price</TD>
            <TD style={styles.td}>Total</TD>
          </TH>
          <TR>
            <TD style={styles.td}>Data 1</TD>
            <TD style={styles.td}>Data 2</TD>
            <TD style={styles.td}>Data 1</TD>
            <TD style={styles.td}>Data 2</TD>
          </TR>
        </Table>
      </Page>
    </Document>
  )
  return (
    <div style={{width: "100%", height: "90%"}}>
      <PDFViewer width="100%" height="90%">
        <EquipmentPDF/>
      </PDFViewer>
      <PDFDownloadLink document={<EquipmentPDF/>} fileName="Equipment.pdf">
        <Button>Download</Button>
      </PDFDownloadLink>
      
    </div>
  )
}