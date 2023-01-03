import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const HealthCard = () => {
  return (
    <div>
        <div className="label">
        <h2>Health & Activies</h2>
        <Card variant="outlined" sx={{ minWidth: 300, background: "#E07A5F" }}>
          <CardContent>
            <Typography sx={{ fontSize: 40, textAlign: "center", color:"white" }} gutterBottom>
              Good
            </Typography>
          </CardContent>
   
        </Card>
      </div>
    </div>
  )
}
