import type { Plugin } from "vite"
import type { sshOptions } from "./interface/index"
import { NodeSSH } from "node-ssh"

export default function myPlugin(options: sshOptions): Plugin {
  const ssh: NodeSSH = new NodeSSH()
  return {
    name: "sshPlugin",
    apply: "build",
    closeBundle: async () => {
      const configOptions = {
        entryPath: "./dist",
        port: 22,
      } as sshOptions
      Object.assign(configOptions, options)
      await connectServer(ssh, configOptions)
      ssh.execCommand(`rm -rf ${configOptions.remotePath}/*`)
      await uploadFiles(ssh, configOptions.entryPath, configOptions.remotePath)
      ssh.dispose()
    },
  }
}

async function connectServer(ssh: NodeSSH, config: sshOptions) {
  await ssh.connect({
    host: config.host,
    port: config.port,
    username: config.username,
    password: config.password,
  })
}

async function uploadFiles(ssh: NodeSSH, localPath: string, remotePath: string) {
  const status = await ssh.putDirectory(localPath, remotePath, {
    recursive: true,
    concurrency: 10
  })
  if (status) {
    console.log('文件上传服务器成功')
  }
}

export { myPlugin as sshPlugin }
