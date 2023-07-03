import React from "react";
import { Page,Line,Svg, Text, Image, Document, StyleSheet,PDFViewer } from "@react-pdf/renderer";
import BIcon from "../images/BinghamtonIcon.png";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title:{
    fontSize:12,
    fontFamily: "Times-Roman",
  },
  horiLine: {
    width:1000,
    height:1,
    top:2,
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
  bIcon: {
    position: 'absolute',
    minWidth: '100%',
    minHeight: '100%',
    height: '80%',
    width: '100%',
    top: '15%',
    left: '5%',
    opacity: 0.06,
    margin:10,
  },
  sname:{
    position:'relative',
    top: 20,
    left:0,
    fontSize:18,
    fontWeight:600,
    fontFamily: "Times-Roman",
  },
  bNumber: {
    fontSize:14,
    fontWeight:400,
    fontFamily: "Times-Roman",
  },
  date:{
    top: 23,
    fontSize:14,
    fontWeight:200,
    color:'grey',
    marginBottom: 40,
  },
  Score: {
    position:'relative',
    top:40,
    left: 20,
    fontSize: 28,
    textAlign: "left",
    color: "#FA8D33"
  },
  text: {
    top: 1,
    left: 65,
    marginBottom:7,
    fontSize: 16,
    fontWeight:600,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  comment:{
    left:65,
    marginRight:100,
    fontSize: 14,
    fontWeight:400,
    textAlign: "justify",
    fontFamily: "Times-Roman",
    flexWrap:'wrap',
    color: '#525252'
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 460,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  svgLine:{
    marginBottom:20,
    left:-35,
    backgroundColor: "#E5E4E2",
    height:1,
    top: 10,
    width:600,
  }
});

const PdfV01 = () => {
    return (
        //Comment PDFViwer when not in use
    // <PDFViewer style={styles.viewer}>  
    <Document>
      <Page size="A4" style={styles.body}>
        <Text style={styles.title} fixed>LEADERSHIP ASSESSMENT REPORT</Text>
        <Svg style={styles.svgLine} fixed><Line x1="0" y1="3" x2="0" y2="3" strokeWidth={1} stroke="rgb(0,0,0)" /></Svg>
        <Text style={styles.sname}>Smith Alex <Text style={styles.bNumber}> ( B00123456 )</Text></Text>
        <Text style={styles.date}>JULY 31, 2023</Text>
        <Image style={styles.bIcon} src={BIcon} fixed></Image>
        <Text style={styles.Score}> 08 </Text><Text style={styles.text}>Idealized Influence and Inspiration </Text>
        <Text style={styles.comment}>Vigorously encouraged me (us) to develop my (our) strengths, made many suggestions and proposals and plans for developing my (our) strengths</Text>
        <Text style={styles.Score}> 04 </Text><Text style={styles.text}>Intellectual Stimulation </Text>
        <Text style={styles.comment}>Encouraged me (us) somewhat to develop my (our) strengths</Text>
        <Text style={styles.Score}> 05 </Text><Text style={styles.text}>Individualized Consideration </Text>
        <Text style={styles.comment}>Showed contempt for my (our) self development, indicated I (we) was (were) incapable of development, said I (we) did not have any strengths, or did not make any mention of my (us) developing my (our) strengths</Text>
        <Text style={styles.Score}> 07 </Text><Text style={styles.text}>Transactional Leadership </Text>
        <Text style={styles.comment}>Clearly enjoys change.  Solicits new ideas from others and acts on them to help produce change.</Text>
        <Text style={styles.Score}> 02 </Text><Text style={styles.text}>Open to Change/New Ideas </Text>
        <Text style={styles.comment}>Expressed an interest in trying new things.  Considers alternative approaches to or ways of doing things.</Text>
        <Text style={styles.Score}> 06 </Text><Text style={styles.text}>Sharing Responsibility </Text>
        <Text style={styles.comment}>Unwilling to consider alternative approaches or ways of doing things.  Prefers to stick with what has worked in the past rather than try new ideas.</Text>
        <Text style={styles.Score}> 06 </Text><Text style={styles.text}>Seeking More Information </Text>
        <Text style={styles.comment}>Unwilling to consider alternative approaches or ways of doing things.  Prefers to stick with what has worked in the past rather than try new ideas.</Text>
        <Text style={styles.Score}> 07 </Text><Text style={styles.text}>Logical Reasoning </Text>
        <Text style={styles.comment}>comment................</Text>
        <Text style={styles.Score}> 09 </Text><Text style={styles.text}>Decisiveness </Text>
        <Text style={styles.comment}>comment................</Text>
        <Text style={styles.Score}> 10 </Text><Text style={styles.text}>Judgement </Text>
        <Text style={styles.comment}>comment................</Text>
        <Text style={styles.Score}> 03 </Text><Text style={styles.text}>Consideration of Alternatives </Text>
        <Text style={styles.comment}>comment................</Text>
        <Text style={styles.Score}> 06 </Text><Text style={styles.text}>Analyses </Text>
        <Text style={styles.comment}>comment................</Text>
        <Text style={styles.Score}> 07 </Text><Text style={styles.text}>Coaching Behaviors and Beliefs </Text>
        <Text style={styles.comment}>comment................</Text>
        <Text style={styles.Score}> 04 </Text><Text style={styles.text}>Teamwork Beliefs </Text>
        <Text style={styles.comment}>comment................</Text>
        <Text style={styles.Score}> 08 </Text><Text style={styles.text}>Empowerment Beliefs </Text>
        <Text style={styles.comment}>comment................</Text>
        <Text style={styles.Score}> 10 </Text><Text style={styles.text}>Planning and Organizing </Text>
        <Text style={styles.comment}>comment................</Text>
        
        
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `Page ${pageNumber} of ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
    // </PDFViewer>
     // comment PDFViewer
  );
};

export default PdfV01;
