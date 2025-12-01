export const views = {
  core: {
    title: "Core System Classes",
    classes: [
      {
        name: "User",
        x: 50,
        y: 50,
        attributes: [
          "- userId: String",
          "- name: String",
          "- email: String",
          "- phone: String",
          "- password: String",
          "- location: Location",
          "- role: UserRole"
        ],
        methods: [
          "+ login(): Boolean",
          "+ logout(): void",
          "+ updateProfile(): void",
          "+ resetPassword(): void"
        ]
      },
      {
        name: "Citizen",
        x: 50,
        y: 350,
        attributes: [
          "- emergencyContacts: List<Contact>",
          "- medicalInfo: String",
          "- ecoPoints: Integer"
        ],
        methods: [
          "+ reportIncident(): void",
          "+ activateSOS(): void",
          "+ viewAlerts(): List<Alert>"
        ]
      },
      {
        name: "Authority",
        x: 300,
        y: 350,
        attributes: [
          "- department: String",
          "- jurisdiction: String",
          "- badgeNumber: String"
        ],
        methods: [
          "+ broadcastAlert(): void",
          "+ updateIncidentStatus(): void",
          "+ assignTask(): void"
        ]
      },
      {
        name: "Volunteer",
        x: 550,
        y: 350,
        attributes: [
          "- skills: List<String>",
          "- availability: Boolean",
          "- hoursLogged: Integer"
        ],
        methods: [
          "+ registerVolunteer(): void",
          "+ viewTasks(): List<Task>",
          "+ updateTaskStatus(): void"
        ]
      }
    ],
    relationships: [
      { from: "Citizen", to: "User", type: "inheritance" },
      { from: "Authority", to: "User", type: "inheritance" },
      { from: "Volunteer", to: "User", type: "inheritance" }
    ]
  },
  emergency: {
    title: "Emergency Management Classes",
    classes: [
      {
        name: "Alert",
        x: 50,
        y: 50,
        attributes: [
          "- alertId: String",
          "- type: AlertType",
          "- severity: String",
          "- message: String",
          "- timestamp: DateTime",
          "- location: Location",
          "- isActive: Boolean"
        ],
        methods: [
          "+ broadcast(): void",
          "+ updateStatus(): void",
          "+ notifyUsers(): void"
        ]
      },
      {
        name: "Emergency",
        x: 350,
        y: 50,
        attributes: [
          "- emergencyId: String",
          "- userId: String",
          "- location: Location",
          "- timestamp: DateTime",
          "- status: String",
          "- priority: String"
        ],
        methods: [
          "+ createEmergency(): void",
          "+ assignResponder(): void",
          "+ closeEmergency(): void"
        ]
      },
      {
        name: "Shelter",
        x: 50,
        y: 300,
        attributes: [
          "- shelterId: String",
          "- name: String",
          "- location: Location",
          "- capacity: Integer",
          "- currentOccupancy: Integer",
          "- facilities: List<String>"
        ],
        methods: [
          "+ checkAvailability(): Boolean",
          "+ updateOccupancy(): void",
          "+ getDirections(): Route"
        ]
      },
      {
        name: "Incident",
        x: 350,
        y: 300,
        attributes: [
          "- incidentId: String",
          "- reportedBy: String",
          "- type: IncidentType",
          "- description: String",
          "- photos: List<String>",
          "- location: Location",
          "- status: String",
          "- timestamp: DateTime"
        ],
        methods: [
          "+ submitReport(): void",
          "+ updateStatus(): void",
          "+ addComment(): void"
        ]
      }
    ],
    relationships: [
      { from: "Emergency", to: "Incident", type: "inheritance" },
      { from: "Alert", to: "Emergency", type: "association", label: "triggers" }
    ]
  },
  environmental: {
    title: "Environmental Monitoring Classes",
    classes: [
      {
        name: "EnvironmentalData",
        x: 50,
        y: 50,
        attributes: [
          "- dataId: String",
          "- location: Location",
          "- timestamp: DateTime",
          "- airQuality: AirQuality",
          "- waterQuality: WaterQuality",
          "- noiseLevel: Float"
        ],
        methods: [
          "+ fetchData(): void",
          "+ calculateAQI(): Integer",
          "+ generateAdvisory(): String"
        ]
      },
      {
        name: "AirQuality",
        x: 50,
        y: 300,
        attributes: [
          "- pm25: Float",
          "- pm10: Float",
          "- co2: Float",
          "- aqi: Integer",
          "- healthRisk: String"
        ],
        methods: [
          "+ calculateAQI(): Integer",
          "+ getHealthAdvice(): String"
        ]
      },
      {
        name: "WaterQuality",
        x: 300,
        y: 300,
        attributes: [
          "- ph: Float",
          "- turbidity: Float",
          "- dissolvedOxygen: Float",
          "- contaminants: List<String>",
          "- safetyStatus: String"
        ],
        methods: [
          "+ assessQuality(): String",
          "+ checkSafety(): Boolean"
        ]
      },
      {
        name: "PollutionReport",
        x: 350,
        y: 50,
        attributes: [
          "- reportId: String",
          "- type: PollutionType",
          "- severity: String",
          "- description: String",
          "- photos: List<String>",
          "- location: Location",
          "- validatedBy: String",
          "- status: String"
        ],
        methods: [
          "+ submitReport(): void",
          "+ validate(): void",
          "+ resolveIssue(): void"
        ]
      },
      {
        name: "EcoActivity",
        x: 550,
        y: 300,
        attributes: [
          "- activityId: String",
          "- userId: String",
          "- type: ActivityType",
          "- points: Integer",
          "- timestamp: DateTime",
          "- verified: Boolean"
        ],
        methods: [
          "+ logActivity(): void",
          "+ awardPoints(): void",
          "+ verifyActivity(): Boolean"
        ]
      }
    ],
    relationships: [
      { from: "EnvironmentalData", to: "AirQuality", type: "composition" },
      { from: "EnvironmentalData", to: "WaterQuality", type: "composition" },
      { from: "PollutionReport", to: "Incident", type: "inheritance" }
    ]
  },
  supporting: {
    title: "Supporting Classes",
    classes: [
      {
        name: "Location",
        x: 50,
        y: 50,
        attributes: [
          "- latitude: Double",
          "- longitude: Double",
          "- address: String",
          "- city: String",
          "- region: String"
        ],
        methods: [
          "+ getCoordinates(): String",
          "+ calculateDistance(): Float",
          "+ getAddress(): String"
        ]
      },
      {
        name: "Notification",
        x: 300,
        y: 50,
        attributes: [
          "- notificationId: String",
          "- userId: String",
          "- title: String",
          "- message: String",
          "- timestamp: DateTime",
          "- isRead: Boolean",
          "- priority: String"
        ],
        methods: [
          "+ send(): void",
          "+ markAsRead(): void",
          "+ delete(): void"
        ]
      },
      {
        name: "Task",
        x: 50,
        y: 250,
        attributes: [
          "- taskId: String",
          "- volunteerId: String",
          "- assignedBy: String",
          "- description: String",
          "- location: Location",
          "- status: String",
          "- deadline: DateTime"
        ],
        methods: [
          "+ assignTask(): void",
          "+ updateProgress(): void",
          "+ completeTask(): void"
        ]
      },
      {
        name: "Report",
        x: 300,
        y: 250,
        attributes: [
          "- reportId: String",
          "- type: ReportType",
          "- generatedBy: String",
          "- dateRange: DateRange",
          "- data: Map<String, Object>",
          "- format: String"
        ],
        methods: [
          "+ generateReport(): void",
          "+ exportReport(): File",
          "+ scheduleReport(): void"
        ]
      },
      {
        name: "Media",
        x: 550,
        y: 150,
        attributes: [
          "- mediaId: String",
          "- type: MediaType",
          "- url: String",
          "- uploadedBy: String",
          "- timestamp: DateTime",
          "- size: Long"
        ],
        methods: [
          "+ upload(): void",
          "+ download(): void",
          "+ delete(): void"
        ]
      }
    ],
    relationships: [
      { from: "Notification", to: "User", type: "association", label: "sent to" },
      { from: "Task", to: "Volunteer", type: "association", label: "assigned to" },
      { from: "Media", to: "Incident", type: "association", label: "attached to" }
    ]
  }
};