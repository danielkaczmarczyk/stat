
// sysctl

const command = new Deno.Command("sysctl", {
  args: ["-a"],
  stdin: "piped",
  stdout: "piped",
});

const child = command.spawn();

child.stdout.pipeTo(
  Deno.openSync("output", { write: true, create: true }).writable,
);

child.stdin.close();

const status = await child.status;
console.log(status);


// when typing this, notice that the output of the sysctl command always contains either strings or numbers only