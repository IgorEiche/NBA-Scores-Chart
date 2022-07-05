# NBA-Scores-Chart

the focus of this project was generating HTML styled elements from an array of objects by manipulating the DOM;

The array contained relevant information regarding NBA matches between Warriors vs Houston, these informations were used to build a primitive graphic.

Hence, a <ul> and its corresponding <li>s elements were built using JS;

The challenge of this project was to make sure that:

- Every <li> object was filled using the innerHTML propriety in order to display the matches information as follows:
  HomeTeam @ AwayTeam GameScore

- The GameScore should be evaluated so that:
  - The winner score could be displayed in bold
  - The <li> objects should have different background-color styles:
    - a green background-color should be diplayed if the Warriors team was the winner
    - a red background-color should be displayed otherwise.
