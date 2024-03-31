import React, { useEffect } from "react";
import { useState } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
} from "@mui/material";
import "./DataTable.css";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";

export const MyTable = ({ categories, data, entity, sendCords }) => {
  useEffect(() => {
    setFilterdData(data);
  }, [data]);

  const [filteredData, setFilterdData] = useState([]);
  const [isShowingEndangered, setIsShowingEndangered] = useState(false);
  const [isSortedChronologically, setIsSortedChronologically] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    const search = event.target.value;
    setSearchValue(search);
    setFilterdData(
      data.filter((item) => {
        return (
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.id.toString().includes(search.toLowerCase())
        );
      })
    );
  };

  const handleRowClick = (event, row) => {
    setSelectedRow(row);
  };

  const handleDoubleClick = () => {
    if (selectedRow) {
      sendCords(
        { lat: selectedRow.lat, lng: selectedRow.lng },
        selectedRow.radius
      );

      setSearchValue("");
    }
  };

  const onColumnClick = (category) => {
    if (category == "עדכון אחרון") {
      if (!isSortedChronologically) {
        setIsSortedChronologically(true);
        setFilterdData(
          [...data].sort((a, b) => {
            const dateA = new Date(a.lastUpdate);
            const dateB = new Date(b.lastUpdate);
            return dateA - dateB;
          })
        );
      } else {
        setFilterdData(filteredData.reverse());
        setIsSortedChronologically(false);
      }
    } else if (category == "סטטוס") {
      setIsSortedChronologically(false);

      if (!isShowingEndangered) {
        setFilterdData(data.filter((item) => item.is_danger));
        setIsShowingEndangered(true);
      } else {
        setFilterdData(data);
        setIsShowingEndangered(false);
      }
    } else {
      setIsSortedChronologically(false);
      setIsShowingEndangered(false);
      setFilterdData(data);
    }
  };

  const tableCategories = categories.map((category) => (
    <TableCell className="tableCell" onClick={() => onColumnClick(category)}>
      {category}
    </TableCell>
  ));

  const tableRows = filteredData.map((row, index) => {
    const rowCells = Object.values(row)
      .slice(0, -3)
      .map((value, index) => (
        <TableCell key={index} className="tableCell">
          {value}
        </TableCell>
      ));

    return (
      <TableRow
        key={index}
        selected={selectedRow && selectedRow.id === row.id}
        onClick={(event) => handleRowClick(event, row)}
        onDoubleClick={handleDoubleClick}
      >
        {rowCells}
        <TableCell className="tableCell">
          <TrackChangesIcon
            sx={{
              width: 40,
              height: 40,
              borderRadius: 5,
              color: row.is_danger ? "red" : "green",
            }}
          />
        </TableCell>
      </TableRow>
    );
  });

  return (
    <div
      style={{
        width: "90%",
        height: "100%",
        margin: "auto",
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "3rem",
          textDecorationThickness: 2,
        }}
      >
        {entity}
      </div>
      <TextField
        id="filled-search"
        label="חיפוש"
        type="search"
        variant="filled"
        fullWidth
        InputProps={{ disableUnderline: true }}
        value={searchValue}
        onChange={handleChange}
        style={{
          backgroundColor: "white",
          borderRadius: "100px",
          direction: "rtl",
          border: "none",
        }}
      />

      <TableContainer
        className="dataTable"
        style={{
          height: "fit-content",
          maxHeight: "75%",
          overflowX: "auto",
          width: "101%",
        }}
        sx={{ mt: 1 }}
      >
        <Table stickyHeader className="table">
          <TableHead className="tableHead">
            <TableRow>
              {tableCategories}
              <TableCell
                className="tableCell"
                onClick={() => onColumnClick("סטטוס")}
              >
                סטטוס
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{tableRows}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
