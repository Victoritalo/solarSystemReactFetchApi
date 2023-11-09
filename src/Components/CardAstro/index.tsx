import { CardContainer, CardText, CardTitle } from "./style";

export interface AstroProps {
  englishName: string;
  isPlanet: boolean;
  gravity: number;
  discoveredBy: string;
  discoveryDate: string;
  bodyType: string;
}

export function AstroCard(props: AstroProps) {
    return (
      <CardContainer>
        <CardTitle>{props.englishName}</CardTitle>
        <CardText><strong>Is Planet:</strong> {props.isPlanet ? "Yes" : "No"}</CardText>
        <CardText><strong>Gravity:</strong> {props.gravity} m/s²</CardText>
        <CardText><strong>Discovered By:</strong> {props.discoveredBy}</CardText>
        <CardText><strong>Discovery Date:</strong> {props.discoveryDate}</CardText>
        <CardText><strong>Body Type:</strong> {props.bodyType}</CardText>
      </CardContainer>
    );
  }