import { Component } from '@angular/core';
import { Board } from './board';
import { Task } from './task';
import { Subtask } from './subtask';
import { Subtasks } from './subtasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoManager';
}
// To-Do 1
const todo1: Task = {
  id: 1,
  Title: "Einkaufsliste für die Grillparty am Wochenende erstellen",
  Beschreibung: "Für die bevorstehende Grillparty am Wochenende muss eine Einkaufsliste erstellt werden, um sicherzustellen, dass alle notwendigen Zutaten und Utensilien vorhanden sind. Es müssen Getränke wie Limonade und Bier, Fleisch wie Hähnchen und Rindfleisch sowie Gemüse wie Mais und Paprika gekauft werden. Auch Teller, Besteck und Servietten sind wichtig. Die Liste muss sorgfältig erstellt werden, um nichts zu vergessen und sicherzustellen, dass alle Gäste zufrieden sind.",
  Subtasks: [
    {
      subtask: "Getränke kaufen",
      Status: "Offen"
    },
    {
      subtask: "Fleisch besorgen",
      Status: "Offen"
    },
    {
      subtask: "Gemüse auswählen",
      Status: "Offen"
    },
    {
      subtask: "Geschirr und Besteck kaufen",
      Status: "Offen"
    }
  ],
  Status: "Offen"
};

// To-Do 2
const todo2: Task = {
  id: 2,
  Title: "Reise nach Japan planen und vorbereiten",
  Beschreibung: "Eine Reise nach Japan ist ein aufregendes und lohnendes Abenteuer, erfordert jedoch eine sorgfältige Planung und Vorbereitung. Es müssen Flüge gebucht, Unterkünfte organisiert und Aktivitäten geplant werden. Es ist auch wichtig, sich über die Kultur und die Gebräuche des Landes zu informieren, um sicherzustellen, dass man respektvoll und angemessen agiert. Eine Packliste ist ebenfalls unerlässlich, um sicherzustellen, dass man alles Notwendige mitnimmt. Die Vorbereitung kann etwas zeitaufwendig sein, aber es wird sich lohnen.",
  Subtasks: [
    {
      subtask: "Flüge buchen",
      Status: "Fertig"
    },
    {
      subtask: "Unterkünfte reservieren",
      Status: "Fertig"
    },
    {
      subtask: "Aktivitäten planen",
      Status: "Offen"
    },
    {
      subtask: "Packliste erstellen",
      Status: "Offen"
    }
  ],
  Status: "In Bearbeitung"
};

// To-Do 3
const todo3: Task = {
  id: 3,
  Title: "Wohnung renovieren",
  Beschreibung: "Die Wohnung benötigt dringend eine Renovierung, um sie in ein angenehmes und komfortables Zuhause zu verwandeln. Es müssen neue Bodenbeläge und Farben ausgewählt werden, um eine entspannte Atmosphäre zu schaffen. Auch eine neue Küche und ein neues Bad sind notwendig, um das Leben in der Wohnung angenehmer zu gestalten. Die Renovierung kannzeitaufwendig und teuer sein, aber es wird sich lohnen, wenn die Wohnung am Ende in neuem Glanz erstrahlt.",

  Subtasks: [
  {
  subtask: "Bodenbeläge auswählen",
  Status: "Offen"
  },
  {
  subtask: "Farben auswählen",
  Status: "Offen"
  },
  {
  subtask: "Neue Küche planen",
  Status: "Offen"
  },
  {
  subtask: "Neues Bad planen",
  Status: "Fertig"
  }
  ],
  Status: "Offen"
  };
  
  // To-Do 4
  const todo4: Task = {
  id: 4,
  Title: "Hochzeit planen",
  Beschreibung: "Die Hochzeit ist ein wichtiger Meilenstein im Leben eines Paares und erfordert eine sorgfältige Planung und Vorbereitung. Es müssen Einladungen verschickt, eine Location ausgewählt und ein Menü erstellt werden. Auch die Musik und die Dekoration sind wichtige Faktoren, um die perfekte Atmosphäre zu schaffen. Es ist wichtig, sich genügend Zeit für die Planung zu nehmen, um sicherzustellen, dass alles reibungslos verläuft.",
  Subtasks: [
  {
  subtask: "Einladungen verschicken",
  Status: "Offen"
  },
  {
  subtask: "Location auswählen",
  Status: "In Bearbeitung"
  },
  {
  subtask: "Menü erstellen",
  Status: "Offen"
  },
  {
  subtask: "Musik auswählen",
  Status: "Offen"
  },
  {
  subtask: "Dekoration planen",
  Status: "Fertig"
  }
  ],
  Status: "In Bearbeitung"
  };
  
  // To-Do 5
  const todo5: Task = {
  id: 5,
  Title: "Neue Programmiersprache lernen",
  Beschreibung: "Das Lernen einer neuen Programmiersprache kann eine Herausforderung sein, aber es eröffnet auch viele Möglichkeiten und erweitert die eigenen Fähigkeiten. Es ist wichtig, eine geeignete Lernressource zu finden und sich einen Zeitplan zu setzen, um kontinuierlich zu lernen. Auch das Üben und Anwenden der neuen Kenntnisse ist wichtig, um sie zu festigen und zu vertiefen.",
  Subtasks: [
  {
  subtask: "Lernressource auswählen",
  Status: "Offen"
  },
  {
  subtask: "Zeitplan setzen",
  Status: "Offen"
  },
  {
  subtask: "Üben und Anwenden",
  Status: "Fertig"
  }
  ],
  Status: "Offen"
  };
  // To-Do 6
const todo6: Task = {
  id: 6,
  Title: "Fitnessziele erreichen",
  Beschreibung: "Um seine Fitnessziele zu erreichen, ist es wichtig, einen Trainingsplan zu erstellen und sich an gesunde Ernährungsgewohnheiten zu halten. Dabei sollten die Ziele realistisch und messbar sein. Eine gute Möglichkeit, um motiviert zu bleiben, ist es, sich regelmäßig selbst zu belohnen und Fortschritte zu feiern.",
  Subtasks: [
  {
  subtask: "Trainingsplan erstellen",
  Status: "Offen"
  },
  {
  subtask: "Gesunde Ernährungsgewohnheiten etablieren",
  Status: "Offen"
  },
  {
  subtask: "Regelmäßig Fortschritte messen",
  Status: "Fertig"
  },
  {
  subtask: "Sich selbst belohnen",
  Status: "Offen"
  }
  ],
  Status: "Offen"
  };
  
  // To-Do 7
  const todo7: Task = {
  id: 7,
  Title: "Buch schreiben",
  Beschreibung: "Das Schreiben eines Buches erfordert viel Zeit, Energie und Durchhaltevermögen. Es ist wichtig, sich ein Thema zu überlegen und eine grobe Struktur zu erstellen. Dann kann man mit dem eigentlichen Schreibprozess beginnen und nach und nach das Buch vervollständigen. Auch das Überarbeiten und Korrekturlesen sind wichtige Schritte, um ein qualitativ hochwertiges Buch zu erstellen.",
  Subtasks: [
  {
  subtask: "Thema überlegen",
  Status: "Offen"
  },
  {
  subtask: "Grobe Struktur erstellen",
  Status: "Offen"
  },
  {
  subtask: "Schreibprozess beginnen",
  Status: "Offen"
  },
  {
  subtask: "Buch vervollständigen",
  Status: "Fertig"
  },
  {
  subtask: "Überarbeiten und Korrekturlesen",
  Status: "Offen"
  }
  ],
  Status: "In Bearbeitung"
  };
  
  // To-Do 8
  const todo8: Task = {
  id: 8,
  Title: "Neue Sprache lernen",
  Beschreibung: "Das Lernen einer neuen Sprache kann eine Herausforderung sein, aber es eröffnet auch viele Möglichkeiten und erweitert die eigenen Horizonte. Es ist wichtig, eine geeignete Lernressource zu finden und sich einen Zeitplan zu setzen, um kontinuierlich zu lernen. Auch das Üben und Anwenden der neuen Kenntnisse ist wichtig, um sie zu festigen und zu vertiefen.",
  Subtasks: [
  {
  subtask: "Lernressource auswählen",
  Status: "Offen"
  },
  {
  subtask: "Zeitplan setzen",
  Status: "Offen"
  },
  {
  subtask: "Üben und Anwenden",
  Status: "Fertig"
  }
  ],
  Status: "Fertig"
  };

export class values {
  public static starterBoard: Board = {
    id: 0,
    name: "Anfangsbord",
    tasks:  [todo1, todo2, todo3, todo4, todo5, todo6, todo7, todo8],
    sections: ["Offen", "In Bearbeitung", "Fertig"]
  }
  public static boards: Board[] = [ this.starterBoard]
  public static selectedBoard: Board = this.boards[0];
  public static activeSections:  string[] = this.selectedBoard.sections;
  public static selectedBoardIndex: number = this.boards.indexOf(this.selectedBoard);

}
export  class functions {
  static changeBordSelection(board: Board) {
    var boards = document.getElementsByClassName('board')
    for (let i = 0; i < boards.length; i++) {
      boards[i].classList.remove("selected");
    }
    document.getElementById(board.name)?.classList.toggle("selected");

  }
    
}