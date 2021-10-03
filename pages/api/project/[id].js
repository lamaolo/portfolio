import projects from "../../../projects.json";

export default function handler(req, res) {
  const { id } = req.query;

  const project = projects.find((project) => project.id === Number(id));

  project ? res.status(200).json(project) : res.status(404).send("Not found");
}
