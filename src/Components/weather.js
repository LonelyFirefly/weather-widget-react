import { Card } from "semantic-ui-react";
import "./style.css";

export function Weather({ weatherData }) {
	<Card>
		<Card.Content>
			<Card.Header className="header"> {weatherData.name} </Card.Header>
		</Card.Content>
	</Card>;
}
