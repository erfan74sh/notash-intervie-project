export const tasks = [
	{
		id: 1,
		status: "done",
		title: "initial project in git",
		processDesscription:
			"This is done by git commands and VScode source control extension. You can see the repository on my GitHub.",
	},
	{
		id: 2,
		status: "done",
		title: "authentication service (Login, Logout)",
		processDesscription:
			'This is done by creating services files for various requests through the "M3O" user API and using the "Axios" package to handle HTTP requests. Also, Formik is used for taking form states and validating inputs. after the user logs in; user info is stores in "authContext" for further use.',
	},
	{
		id: 3,
		status: "done",
		title: "after login show the current time",
		processDesscription:
			"The current time is shown on the profile page with some additional user information. When the user logs in; automatically redirects to the profile page. This is done by asynchronous submit event and error handling to check server response.",
	},
	{
		id: 4,
		status: "done",
		title: "prevent showing the current time page without login",
		processDesscription:
			"This is done by creating a ProtectedRoute HOC that checks if a user is logged in, shows its child routes otherwise redirect the user to the login page.",
	},
	{
		id: 5,
		status: "not done",
		title: "create Unit test for the login page",
		processDesscription:
			"I don't have technical knowledge of Testing but tried to read and learn a litle about it. Although now I know the concept and how this could be done,  I couldn't complete this task because of a lack of time.",
	},
	{
		id: 6,
		status: "note done",
		title:
			"after build project, in the chunk file, all routes can view: You try to come up with a solution to hide routs",
		processDesscription:
			"I don't have any idea how to do this. I searched a little but couldn't find anything helpful (the only thing I understand is maybe it should be done with some back-end stuff). But I'm very curious about how this should be done, and I'd be very happy if you give me some information.",
	},
];
